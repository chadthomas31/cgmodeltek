import { logger } from './logger';

export interface AnalyticsEvent {
  eventName: string;
  properties?: Record<string, any>;
  timestamp?: string;
}

class Analytics {
  private static instance: Analytics;
  private events: AnalyticsEvent[] = [];
  private readonly maxEvents: number = 1000;

  private constructor() {
    if (typeof window !== 'undefined') {
      this.initializePageTracking();
    }
  }

  public static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  private initializePageTracking(): void {
    // Track page views
    window.addEventListener('popstate', () => {
      this.trackPageView();
    });

    // Initial page view
    this.trackPageView();
  }

  private trackPageView(): void {
    const path = window.location.pathname;
    const search = window.location.search;
    const url = path + search;

    this.track('page_view', {
      url,
      title: document.title,
      referrer: document.referrer,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    });
  }

  private addEvent(event: AnalyticsEvent): void {
    this.events.push({
      ...event,
      timestamp: event.timestamp || new Date().toISOString(),
    });

    if (this.events.length > this.maxEvents) {
      this.events.shift();
    }
  }

  public track(eventName: string, properties?: Record<string, any>): void {
    const event: AnalyticsEvent = {
      eventName,
      properties,
    };

    this.addEvent(event);
    logger.debug(`Analytics Event: ${eventName}`, properties);

    // Here you could send the event to your analytics service
    // Example: analyticsService.send(event);
  }

  public trackUserInteraction(
    elementId: string,
    interactionType: string,
    properties?: Record<string, any>
  ): void {
    this.track('user_interaction', {
      elementId,
      interactionType,
      ...properties,
    });
  }

  public trackError(error: Error, properties?: Record<string, any>): void {
    this.track('error', {
      errorMessage: error.message,
      errorStack: error.stack,
      ...properties,
    });
  }

  public getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  public clearEvents(): void {
    this.events = [];
  }
}

export const analytics = Analytics.getInstance(); 