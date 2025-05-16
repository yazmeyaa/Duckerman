import { StickerType, TelegramStickersService } from "@duckerman/protos";
import { createClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-node";
import { newServiceLogger } from "@duckerman/logger";

const logger = newServiceLogger({
  serviceName: "telegram_gateway",
});

async function init(): Promise<void> {}

async function main(): Promise<void> {
  logger.info;
  const tgStickTransport = createConnectTransport({
    baseUrl: "http://localhost:8080",
    httpVersion: "1.1",
  });

  const telegramStickClient = createClient(
    TelegramStickersService,
    tgStickTransport
  );

  const response = await telegramStickClient.downloadSticker({
    stickerId: "stickerId",
    stickerType: StickerType.TGS,
  });

  logger.info("Got response from sticker service", { response });
}

init().then(() => {
  main();
});
