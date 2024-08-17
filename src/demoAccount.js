import { BigNumber } from "bignumber.js";

export const demoAccounts = [
  {
    id:
      "js:2:bitcoin:xpub6DLjoHJp1F3eoWRzMDNNiiwDzUN8Wv47NwqPJcJT3YsQUHZgQzn3pzN4pYTNgERytsDVMbmSye4t4BE6gB1tAUj718Nf3c5eAkPhtJhBM9K:native_segwit",
    seedIdentifier:
      "0405130577d718e0f05fd22254b40fd24970276d046936a576e9c86e72442f4019b7d76572f3df2281572f5d72244b22938ae440699c5773eb50fdeb921b6f793d",
    type: "Account",
    name: "Bitcoin 1",
    starred: false,
    derivationMode: "native_segwit",
    index: 0,
    freshAddress: "bc1q3me9zkdf74pr6hn6ysmentqskz0jdk4x7wgrgw",
    freshAddressPath: "44'/0'/0'/0/0",
    unit: {
      name: "BTC",
      code: "BTC",
      magnitude: 8,
    },
    used: false,
    blockHeight: 0,
    currency: {
      explorerViews: "https://blockstream.info/",
      id: "bitcoin",
      coinType: 0,
      name: "Bitcoin",
      managerAppName: "Bitcoin",
      ticker: "BTC",
      scheme: "bitcoin",
      color: "#ffae35",
      symbol: "Ƀ",
      supportsSegwit: true,
      supportsNativeSegwit: true,
      family: "bitcoin",
      units: [
        {
          name: "bitcoin",
          code: "BTC",
          magnitude: 8,
        },
      ],
    },
    freshAddresses: [
      {
        derivationPath: "44'/0'/0'/0/0",
        address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
      },
    ],
    blockHeight: 0,
    syncHash: "sync-hash-1",
    creationDate: new Date("2019-04-17T00:00:00.000Z"),
    operationsCount: 2,
    operations: [
      {
        id:
          "js:2:bitcoin:xpub6DLjoHJp1F3eoWRzMDNNiiwDzUN8Wv47NwqPJcJT3YsQUHZgQzn3pzN4pYTNgERytsDVMbmSye4t4BE6gB1tAUj718Nf3c5eAkPhtJhBM9K:native_segwit-02c10387033a317337469188925089a8362079cf168c246f8130e2d483589e8b-OUT",
        hash: "02c10387033a317337469188925089a8362079cf168c246f8130e2d483589e8b",
        type: "OUT",
        senders: ["bc1q3me9zkdf74pr6hn6ysmentqskz0jdk4x7wgrgw"],
        recipients: ["bc1qkea77sq368h70sly5k3vp266gkr9ykrygy7mpf"],
        accountId:
          "js:2:bitcoin:xpub6DLjoHJp1F3eoWRzMDNNiiwDzUN8Wv47NwqPJcJT3YsQUHZgQzn3pzN4pYTNgERytsDVMbmSye4t4BE6gB1tAUj718Nf3c5eAkPhtJhBM9K:native_segwit",
        blockHash: "00000000000000000002f64eca8079186511e92a905e87b9e83ecb5f0c30241b",
        blockHeight: 856906,
        extra: {},
        date: new Date("2024-08-15T15:48:11.000Z"),
        value: new BigNumber("2324200000"),
        fee: "4402",
        transactionSequenceNumber: 4294967295,
        hasFailed: false,
      },
      {
        id:
          "js:2:bitcoin:xpub6DLjoHJp1F3eoWRzMDNNiiwDzUN8Wv47NwqPJcJT3YsQUHZgQzn3pzN4pYTNgERytsDVMbmSye4t4BE6gB1tAUj718Nf3c5eAkPhtJhBM9K:native_segwit-6660bad9a2e25a13a679120d3a4d23225c3d6e05fcaf2ccd4b575c059f689dda-IN",
        hash: "6660bad9a2e25a13a679120d3a4d23225c3d6e05fcaf2ccd4b575c059f689dda",
        type: "IN",
        senders: ["bc1qamgjuxaywqls56h7rg7afga3m6rgqwfkew688k"],
        recipients: ["bc1q3me9zkdf74pr6hn6ysmentqskz0jdk4x7wgrgw"],
        accountId:
          "js:2:bitcoin:xpub6DLjoHJp1F3eoWRzMDNNiiwDzUN8Wv47NwqPJcJT3YsQUHZgQzn3pzN4pYTNgERytsDVMbmSye4t4BE6gB1tAUj718Nf3c5eAkPhtJhBM9K:native_segwit",
        blockHash: "00000000000000000002dac54a21fad4382519deb9652afcb3f77d42756e161b",
        blockHeight: 856850,
        extra: {},
        date: new Date("2024-08-15T07:02:26.000Z"),
        value: new BigNumber("3324200000"),
        fee: "58210",
        hasFailed: false,
      },
    ],
    pendingOperations: [],
    currencyId: "bitcoin",
    unitMagnitude: 8,
    lastSyncDate: new Date("2026-04-17T00:00:00.000Z"),
    balance: "12789500000000",
    spendableBalance: "12789500000000",
    nfts: [],
    balanceHistory: [
      {
        date: new Date("2019-07-15T00:00:00.000Z").getTime(),
        value: "12789500000000",
        val: "12789500000000",
        balance: "112789500000000",
      },
    ],
    balanceHistoryCache: {
      HOUR: {
        latestDate: new Date("2019-07-15T00:00:00.000Z").getTime(),
        balances: ["12789500000000"],
      },
      DAY: {
        latestDate: new Date("2019-07-15T00:00:00.000Z").getTime(),
        balances: ["12789500000000"],
      },
      WEEK: {
        latestDate: new Date("2019-07-15T00:00:00.000Z").getTime(),
        balances: ["12789500000000"],
      },
    },
    endpointConfig: null,
    xpub:
      "xpub6DLjoHJp1F3eoWRzMDNNiiwDzUN8Wv47NwqPJcJT3YsQUHZgQzn3pzN4pYTNgERytsDVMbmSye4t4BE6gB1tAUj718Nf3c5eAkPhtJhBM9K",
    subAccounts: [],
    tronResources: null,
    cosmosResources: null,
    tezosResources: null,
    bitcoinResources: {
      utxos: [
        {
          txHash: "tx-hash-1",
          outputIndex: 0,
          value: "127079013462",
          address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
          path: "44'/0'/0'/0/0",
        },
      ],
    },
    swapHistory: [],
    algorandResources: null,
    polkadotResources: null,
    elrondResources: null,
    cryptoOrgResources: null,
    solanaResources: null,
  },
];
