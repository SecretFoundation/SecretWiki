---
title: Tutorials
---

# Delegating with the secretcli

To stake with a node through the CLI, all you must do is delegate to the Secret Validator Address of the node you wish to stake with. You can find the address of validators by running the following command. Please remember through the duration of this guide that the secretcli counts SCRT in USCRT. 1 SCRT = 1,000,000 USCRT.

1. Query staking validators.
```bash
secretcli query staking validators
```

Once you list them you can find the Secret Validator Address in the output.

Example Output

Note: Do not stake to the Enigma Bootstrap Node. You have been warned.
```bash
  {
    "operator_address": "secretvaloper13l72vhjngmg55ykajxdnlalktwglyqjqaz0tdu",
    "consensus_pubkey": "secretvalconspub1zcjduepqy9vaxvaz095hhkn00p0fysx5ry0jer3zhy0v43qd4tvxyayl6dpqq73rxv",
    "jailed": false,
    "status": 2,
    "tokens": "952799895",
    "delegator_shares": "962419895.000000000000000000",
    "description": {
      "moniker": "Enigma Bootstrap",
      "identity": "",
      "website": "",
      "security_contact": "",
      "details": ""
    },
    "unbonding_height": "277803",
    "unbonding_time": "2020-07-28T19:48:27.983095623Z",
    "commission": {
      "commission_rates": {
        "rate": "0.100000000000000000",
        "max_rate": "0.200000000000000000",
        "max_change_rate": "0.010000000000000000"
      },
      "update_time": "2020-02-13T15:00:00Z"
    },
    "min_self_delegation": "1"
  },
```

From this output you would take the secretvaloper address `secretvaloper13l72vhjngmg55ykajxdnlalktwglyqjqaz0tdu` and that would be the address you stake to. Remember, this is just an example and you should not stake to the Enigma Bootstrap Node.

2. Check your balance

Checking the balance of your account will help you determine how much you can stake. Be sure to leave around 1 SCRT or 1,000,000 uscrt so you can pay transaction fees from the account.

```bash
secretcli query account <secret-address>
```

Example output
```bash
{
  "type": "cosmos-sdk/Account",
  "value": {
    "address": "secret<address>",
    "coins": [
      {
        "denom": "uscrt",
        "amount": "20"
      }
    ],
    "public_key": "secretpub1<pub-address>",
    "account_number": 22,
    "sequence": 117
  }
}
```


3. Delegate your tokens

You can delegate to a validator of your choising by getting the "secretvaloper" address and running the following command from a full node or light client.

```bash
secretcli tx staking delegate <secretvaloper-address> <amountToBond>uscrt --from <delegator-Key-Name>  --gas auto
```
