export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

type LogData = string | number | boolean | null | undefined | Record<string, unknown>;

export interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  data?: LogData;
  error?: Error;
}

class Logger {
  private static instance: Logger;
  private logs: LogEntry[] = [];
  private readonly maxLogs: number = 1000;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private formatMessage(level: LogLevel, message: string, data?: LogData, error?: Error): LogEntry {
    return {
      timestamp: new Date().toISOString(),
      level,
      message,
      data,
      error,
    };
  }

  private addLog(entry: LogEntry): void {
    this.logs.push(entry);
    if (this.logs.length > this.maxLogs) {
      this.logs.shift();
    }
  }

  private log(level: LogLevel, message: string, data?: LogData, error?: Error): void {
    const entry = this.formatMessage(level, message, data, error);
    this.addLog(entry);

    if (process.env.NODE_ENV === 'development') {
      const consoleMessage = `[${entry.timestamp}] ${level}: ${message}`;
      switch (level) {
        case LogLevel.DEBUG:
          // eslint-disable-next-line no-console
          console.debug(consoleMessage, data);
          break;
        case LogLevel.INFO:
          // eslint-disable-next-line no-console
          console.info(consoleMessage, data);
          break;
        case LogLevel.WARN:
          // eslint-disable-next-line no-console
          console.warn(consoleMessage, data);
          break;
        case LogLevel.ERROR:
          // eslint-disable-next-line no-console
          console.error(consoleMessage, error || data);
          break;
      }
    }
  }

  public debug(message: string, data?: LogData): void {
    this.log(LogLevel.DEBUG, message, data);
  }

  public info(message: string, data?: LogData): void {
    this.log(LogLevel.INFO, message, data);
  }

  public warn(message: string, data?: LogData): void {
    this.log(LogLevel.WARN, message, data);
  }

  public error(message: string, error?: Error, data?: LogData): void {
    this.log(LogLevel.ERROR, message, data, error);
  }

  public getLogs(): LogEntry[] {
    return [...this.logs];
  }

  public clearLogs(): void {
    this.logs = [];
  }
}

export const logger = Logger.getInstance(); 