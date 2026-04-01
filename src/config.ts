export const CONFIG = {
  EXCHANGE: "LBANK_V2" as const,
  SOURCE: "lbank-v2" as const,
  TYPE: "CEX" as const,
  CHAIN: "multi" as const,
  PORT: parseInt(process.env.PORT || "10473", 10),
  SERVICE_NAME: "GENESIS-INGESTOR-LBANK-V2",
  API_URL: "https://api.lbank.com/v2/markets",
  TICKER_URL: "",
  INGESTION_GATE_URL: process.env.INGESTION_GATE_URL || "http://genesis-ingestion-gate:8700/ingest",
  FETCH_TIMEOUT_MS: parseInt(process.env.FETCH_TIMEOUT_MS || "10000", 10),
  VERSION: "2.0.0-sf",
};
