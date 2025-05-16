import { createLogger, format, Logger, transports } from "winston";

export type NewLoggerConstructor = {
  serviceName: string;
};

export const newServiceLogger = (props: NewLoggerConstructor): Logger => {
  const logger = createLogger({
    format: format.json(),
    defaultMeta: {
      service: props.serviceName,
    },
    transports: [
      new transports.Console({
        format: format.simple(),
      }),
    ],
  });

  return logger;
};
