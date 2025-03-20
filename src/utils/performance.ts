export interface PerformanceMetrics {
  pageLoad: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

export function measurePerformance(): PerformanceMetrics {
  const metrics: PerformanceMetrics = {
    pageLoad: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
  };

  if (typeof window !== 'undefined' && window.performance) {
    // Measure page load time
    const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationTiming) {
      metrics.pageLoad = navigationTiming.loadEventEnd - navigationTiming.startTime;
    }

    // Measure Core Web Vitals
    const observer = new PerformanceObserver((entryList) => {
      entryList.getEntries().forEach((entry: PerformanceEntry) => {
        if (entry.name === 'first-contentful-paint') {
          metrics.firstContentfulPaint = (entry as PerformancePaintTiming).startTime;
        } else if (entry.name === 'largest-contentful-paint') {
          metrics.largestContentfulPaint = (entry as PerformancePaintTiming).startTime;
        } else if (entry.name === 'first-input') {
          metrics.firstInputDelay = (entry as PerformanceEventTiming).duration;
        } else if (entry.name === 'layout-shift') {
          metrics.cumulativeLayoutShift += (entry as LayoutShiftEntry).value;
        }
      });
    });

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
  }

  return metrics;
}

class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetrics = {
    pageLoad: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
  };

  private constructor() {
    if (typeof window !== 'undefined') {
      this.initializePerformanceObserver();
    }
  }

  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  private initializePerformanceObserver(): void {
    // First Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      if (entries.length > 0) {
        this.metrics.firstContentfulPaint = entries[0].startTime;
        this.logMetric('FCP', this.metrics.firstContentfulPaint);
      }
    }).observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      if (entries.length > 0) {
        this.metrics.largestContentfulPaint = entries[entries.length - 1].startTime;
        this.logMetric('LCP', this.metrics.largestContentfulPaint);
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      if (entries.length > 0) {
        this.metrics.firstInputDelay = entries[0].duration;
        this.logMetric('FID', this.metrics.firstInputDelay);
      }
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    new PerformanceObserver((entryList) => {
      let cls = 0;
      entryList.getEntries().forEach((entry) => {
        const layoutShift = entry as LayoutShiftEntry;
        if (!layoutShift.hadRecentInput) {
          cls += layoutShift.value;
        }
      });
      this.metrics.cumulativeLayoutShift = cls;
      this.logMetric('CLS', this.metrics.cumulativeLayoutShift);
    }).observe({ entryTypes: ['layout-shift'] });

    // Page Load Time
    window.addEventListener('load', () => {
      this.metrics.pageLoad = performance.now();
      this.logMetric('PageLoad', this.metrics.pageLoad);
    });
  }

  private logMetric(name: string, value: number): void {
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance Metric - ${name}:`, value);
    }
    // Here you could send the metrics to your analytics service
    // Example: analytics.track('performance_metric', { name, value });
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }
}

export const performanceMonitor = PerformanceMonitor.getInstance(); 