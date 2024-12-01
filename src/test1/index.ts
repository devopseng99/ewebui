/**
 * Test1 Module
 * This is a sample implementation for the test1 module
 */

export interface Test1Config {
  name: string;
  version: string;
  enabled: boolean;
}

export class Test1Service {
  private config: Test1Config;

  constructor(config: Test1Config) {
    this.config = config;
  }

  /**
   * Initialize the test1 service
   */
  public async initialize(): Promise<void> {
    console.log(`Initializing Test1 Service: ${this.config.name}`);
    console.log(`Version: ${this.config.version}`);
    console.log(`Enabled: ${this.config.enabled}`);
  }

  /**
   * Get the current configuration
   */
  public getConfig(): Test1Config {
    return this.config;
  }

  /**
   * Update the configuration
   */
  public updateConfig(newConfig: Partial<Test1Config>): void {
    this.config = {
      ...this.config,
      ...newConfig
    };
  }
}

// Example usage
const defaultConfig: Test1Config = {
  name: "Test1Service",
  version: "1.0.0",
  enabled: true
};

export const createTest1Service = (config: Partial<Test1Config> = {}): Test1Service => {
  return new Test1Service({
    ...defaultConfig,
    ...config
  });
};