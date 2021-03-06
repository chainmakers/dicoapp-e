export default {
  global: {
    loading: false,
    error: false,
    currentUser: {
      result: 'success',
      userpass: 'not_found_userpass',
      mypubkey: 'not_found_mypubkey',
      pubsecp: 'not_found_pubsecp',
      KMD: 'RRVJBpA5MoeTo3beA1iP6euWWrWcJdJtXu',
      BTC: '1HD77JGnkyqtj3ESgqjG18aJkb41aknPyv',
      NXT: 'NXT-5ZEZ-RC2J-RW2V-E49ZA',
      coins: [
        {
          txfee: 20000,
          rpc: '127.0.0.1:8332',
          height: -1,
          smartaddress: '1HD77JGnkyqtj3ESgqjG18aJkb41aknPyv',
          wiftype: 128,
          coin: 'BTC',
          p2shtype: 5,
          status: 'inactive',
          pubtype: 0,
          installed: false,
          balance: 0
        },
        {
          zcredits: 0,
          zdebits: {
            swaps: [],
            pendingswaps: 0
          },
          txfee: 1000,
          rpc: '127.0.0.1:7771',
          height: 0,
          smartaddress: 'RRVJBpA5MoeTo3beA1iP6euWWrWcJdJtXu',
          wiftype: 188,
          KMDvalue: 0,
          coin: 'KMD',
          p2shtype: 85,
          status: 'inactive',
          pubtype: 60,
          installed: true,
          balance: 0
        },
        {
          txfee: 1000,
          rpc: '127.0.0.1:10306',
          height: -1,
          smartaddress: 'RRVJBpA5MoeTo3beA1iP6euWWrWcJdJtXu',
          wiftype: 188,
          coin: 'EQL',
          p2shtype: 85,
          status: 'inactive',
          pubtype: 60,
          installed: false,
          balance: 0
        },
        {
          txfee: 100000,
          rpc: '127.0.0.1:9332',
          height: -1,
          smartaddress: 'LbS4NWacqe5wyqvbryiZH9e4xoRHk9WNUJ',
          wiftype: 176,
          coin: 'LTC',
          p2shtype: 5,
          status: 'inactive',
          pubtype: 48,
          installed: false,
          balance: 0
        },
        {
          txfee: 1000,
          rpc: '127.0.0.1:11116',
          height: -1,
          smartaddress: 'RRVJBpA5MoeTo3beA1iP6euWWrWcJdJtXu',
          wiftype: 188,
          coin: 'PIZZA',
          p2shtype: 85,
          status: 'inactive',
          pubtype: 60,
          installed: false,
          balance: 0
        },
        {
          txfee: 1000,
          rpc: '127.0.0.1:8923',
          height: -1,
          smartaddress: 'RRVJBpA5MoeTo3beA1iP6euWWrWcJdJtXu',
          wiftype: 188,
          coin: 'BEER',
          p2shtype: 85,
          status: 'inactive',
          pubtype: 60,
          installed: false,
          balance: 0
        },
        {
          txfee: 1000,
          rpc: '127.0.0.1:14276',
          height: -1,
          smartaddress: 'RRVJBpA5MoeTo3beA1iP6euWWrWcJdJtXu',
          wiftype: 188,
          coin: 'COQUI',
          p2shtype: 85,
          status: 'inactive',
          pubtype: 60,
          installed: false,
          balance: 0
        }
      ]
    },
    balance: {
      init: true,
      loading: false,
      error: false,
      coins: ['EQL', 'BTC', 'LTC', 'KMD', 'BEER', 'PIZZA', 'COQUI'],
      entities: {
        EQL: {
          coin: 'EQL',
          address: 'RRVJBpA5MoeTo3beA1iP6euWWrWcJdJtXu',
          balance: 2.11114249,
          fee: 0.00001,
          loading: false,
          error: false
        },
        BTC: {
          coin: 'BTC',
          address: '1HD77JGnkyqtj3ESgqjG18aJkb41aknPyv',
          balance: 0,
          fee: 0.0002,
          loading: false,
          error: false
        },
        LTC: {
          coin: 'LTC',
          address: 'LbS4NWacqe5wyqvbryiZH9e4xoRHk9WNUJ',
          balance: 0,
          fee: 0.001,
          loading: false,
          error: false
        },
        KMD: {
          coin: 'KMD',
          address: 'RRVJBpA5MoeTo3beA1iP6euWWrWcJdJtXu',
          balance: 0.5046568,
          fee: 0.00001,
          loading: false,
          error: false
        },
        BEER: {
          coin: 'BEER',
          address: 'RRVJBpA5MoeTo3beA1iP6euWWrWcJdJtXu',
          balance: 6533.11932123,
          fee: 0.00001,
          loading: false,
          error: false
        },
        PIZZA: {
          coin: 'PIZZA',
          address: 'RRVJBpA5MoeTo3beA1iP6euWWrWcJdJtXu',
          balance: 0.67694,
          fee: 0.00001,
          loading: false,
          error: false
        },
        COQUI: {
          coin: 'COQUI',
          address: 'RRVJBpA5MoeTo3beA1iP6euWWrWcJdJtXu',
          balance: 720.26057628,
          fee: 0.00001,
          loading: false,
          error: false
        }
      }
    }
  },
  buy: {
    prices: {
      loading: false,
      error: false,
      entities: {
        EQL: {
          zcredits: 0,
          pubkey: '',
          depth: 0,
          bestPrice: 0,
          price: 0,
          avevolume: 0,
          base: 'COQUI',
          address: '',
          numutxos: 0,
          rel: 'EQL',
          maxvolume: 0,
          age: 0
        },
        BTC: {
          zcredits: 0,
          pubkey: '',
          depth: 0,
          bestPrice: 0,
          price: 0,
          avevolume: 0,
          base: 'COQUI',
          address: '',
          numutxos: 0,
          rel: 'BTC',
          maxvolume: 0,
          age: 0
        },
        LTC: {
          zcredits: 0,
          pubkey: '',
          depth: 0,
          bestPrice: 0,
          price: 0,
          avevolume: 0,
          base: 'COQUI',
          address: '',
          numutxos: 0,
          rel: 'LTC',
          maxvolume: 0,
          age: 0
        },
        KMD: {
          zcredits: 0,
          pubkey: '',
          depth: 0,
          bestPrice: 0,
          price: 0,
          avevolume: 0,
          base: 'COQUI',
          address: '',
          numutxos: 0,
          rel: 'KMD',
          maxvolume: 0,
          age: 0
        },
        BEER: {
          zcredits: 0,
          pubkey: '',
          depth: 0,
          bestPrice: 0,
          price: 0,
          avevolume: 0,
          base: 'COQUI',
          address: '',
          numutxos: 0,
          rel: 'BEER',
          maxvolume: 0,
          age: 0
        },
        PIZZA: {
          zcredits: 0,
          pubkey: '',
          depth: 0,
          bestPrice: 0,
          price: 0,
          avevolume: 0,
          base: 'COQUI',
          address: '',
          numutxos: 0,
          rel: 'PIZZA',
          maxvolume: 0,
          age: 0
        }
      }
    },
    buying: {
      loading: false,
      error: false
    },
    swaps: {
      currentSwap: null,
      processingList: [],
      finishedList: [],
      entities: {
        '1f5785e5cdafaf07be08705f00075f7e55cd38e261faedeffbae34df06e978e1': {
          alice: 'BEER',
          alicepayment: {
            tx:
              '0000000000000000000000000000000000000000000000000000000000000000',
            value: 0
          },
          bobdeposit: {
            coin: 'COQUI',
            tx:
              '7c9149644283f17a3985478b92f40b1b14613a7f7c8828cf16977f2669ae015d',
            value: 0.97043432
          },
          requestid: 500646531,
          bobamount: 0.86259051,
          sentflags: ['myfee', 'bobdeposit'],
          expiration: 1539882962,
          bobpayment: {
            tx:
              '0000000000000000000000000000000000000000000000000000000000000000',
            value: 0
          },
          status: 'finished',
          bob: 'COQUI',
          quoteid: 3984568910,
          aliceamount: 1.82899923,
          myfee: {
            coin: 'BEER',
            tx:
              'cdbf5618caffe4704f2696e2e2347e91414675d7e3af32d27b2cae016b83f638',
            value: 0.00235392
          },
          id: 502419763,
          uuid:
            '1f5785e5cdafaf07be08705f00075f7e55cd38e261faedeffbae34df06e978e1',
          alicespend: {
            tx:
              '0000000000000000000000000000000000000000000000000000000000000000',
            value: 0
          }
        },
        '539d497fabed996361e4278d2a286aa7be067b1ca9d0f69decd0a86c2aa0df8a': {
          alice: 'BEER',
          alicepayment: {
            tx:
              '0000000000000000000000000000000000000000000000000000000000000000',
            value: 0
          },
          bobdeposit: {
            coin: 'COQUI',
            tx:
              '801759be013ef6a40063a881dfc2696404509bbe9ff5f9e6cf9d3da0843d8e03',
            value: 5.14414552
          },
          requestid: 3386332494,
          bobamount: 4.57255602,
          sentflags: ['myfee', 'bobdeposit'],
          expiration: 1541268758,
          bobpayment: {
            tx:
              '0000000000000000000000000000000000000000000000000000000000000000',
            value: 0
          },
          status: 'finished',
          bob: 'COQUI',
          quoteid: 3773322638,
          aliceamount: 9.25934926,
          myfee: {
            coin: 'BEER',
            tx:
              'eceef849c9c293036e5735d10e71e49caf6b4393cda16d59c1d2cefa97e316ab',
            value: 0.01191679
          },
          id: 304452410,
          uuid:
            '539d497fabed996361e4278d2a286aa7be067b1ca9d0f69decd0a86c2aa0df8a',
          alicespend: {
            tx:
              '0000000000000000000000000000000000000000000000000000000000000000',
            value: 0
          }
        },
        '973a011168bca091c4f2f045f04b9f413a5a00d1a76bf405a07c9dd01917283f': {
          alice: 'BEER',
          alicepayment: {
            tx:
              '0000000000000000000000000000000000000000000000000000000000000000',
            value: 0
          },
          bobdeposit: {
            coin: 'COQUI',
            tx:
              '0aaf80546fe4a86bf436713527fc5fb3f99a5327219993d7a22979b724a209a8',
            value: 4.97603131
          },
          requestid: 2393883205,
          bobamount: 4.42312117,
          sentflags: ['myfee', 'bobdeposit'],
          expiration: 1541267762,
          bobpayment: {
            tx:
              '0000000000000000000000000000000000000000000000000000000000000000',
            value: 0
          },
          status: 'finished',
          bob: 'COQUI',
          quoteid: 884137062,
          aliceamount: 9.25934926,
          myfee: {
            coin: 'BEER',
            tx:
              '3273420e6fc9d3a389f38c658792554db8d0906cbedfaafd1ebdf14dfd0f5f05',
            value: 0.01191679
          },
          id: 3273192595,
          uuid:
            '973a011168bca091c4f2f045f04b9f413a5a00d1a76bf405a07c9dd01917283f',
          alicespend: {
            tx:
              '0000000000000000000000000000000000000000000000000000000000000000',
            value: 0
          }
        }
      }
    },
    swapDetailModal: {
      open: false,
      uuid: null
    }
  },
  websocket: {
    isStartWebsocket: true
  },
  router: {
    location: {
      pathname: '/wallet',
      search: '',
      hash: ''
    },
    action: 'PUSH'
  },
  login: {},
  snackbars: {
    open: false,
    message: '',
    timeout: 6000
  },
  logoutDialog: {
    show: false
  },
  language: {
    locale: 'en'
  },
  wallet: {
    transactions: {
      loading: false,
      error: false,
      queueids: {
        '1': 'BTC',
        '2': 'KMD',
        '3': 'EQL',
        '4': 'LTC',
        '5': 'PIZZA',
        '6': 'BEER',
        '7': 'COQUI'
      },
      coins: {
        BTC: {
          list: [],
          entities: {}
        },
        EQL: {
          list: [
            '8fe21901c37c49b977b7468edac6956c33b5da7b17f8444e96b946f038a3f422',
            'ac87f71d5d67d66b5201bb75146f3c4d7558c79d907d35603ba44f242d2146ef',
            '8de739b6e1d065a370cb863ebb3798ac6143a80ea58152def783ed68bcfa5c1b',
            'd5bbcbace5c21c0317f29e7a43dbce7540f34dd5872e74d9e47fb6417c74bfe0'
          ],
          entities: {
            '8fe21901c37c49b977b7468edac6956c33b5da7b17f8444e96b946f038a3f422': {
              blockindex: 113219,
              time: 1536044818,
              coin: 'EQL',
              amount: 0,
              blocktime: 1536044818,
              blockhash:
                '00199333193a4b497e87992ffd9ed77794bc4033018c54fe0ada0e24ec2f2a3b',
              category: 'send',
              confirmations: 59241,
              txid:
                '8fe21901c37c49b977b7468edac6956c33b5da7b17f8444e96b946f038a3f422'
            },
            ac87f71d5d67d66b5201bb75146f3c4d7558c79d907d35603ba44f242d2146ef: {
              blockindex: 26807,
              time: 1529678697,
              coin: 'EQL',
              amount: 0.99369084,
              blocktime: 1529678697,
              blockhash:
                '009897e07d1148dbe462baaea6090625da53197e84aa93e1aad0057d7ad4649c',
              category: 'receive',
              confirmations: 145653,
              txid:
                'ac87f71d5d67d66b5201bb75146f3c4d7558c79d907d35603ba44f242d2146ef'
            },
            '8de739b6e1d065a370cb863ebb3798ac6143a80ea58152def783ed68bcfa5c1b': {
              blockindex: 17670,
              time: 1528946187,
              coin: 'EQL',
              amount: 0.10431096,
              blocktime: 1528946187,
              blockhash:
                '002f9ea8d288d56733b637d0962d77c4af88ecf0a61261b270ab601d30f56081',
              category: 'receive',
              confirmations: 154790,
              txid:
                '8de739b6e1d065a370cb863ebb3798ac6143a80ea58152def783ed68bcfa5c1b'
            },
            d5bbcbace5c21c0317f29e7a43dbce7540f34dd5872e74d9e47fb6417c74bfe0: {
              blockindex: 16099,
              time: 1528852157,
              coin: 'EQL',
              amount: 1.01315069,
              blocktime: 1528852157,
              blockhash:
                '02ca30ec3fc1f7eb06b1c2ded50f4cf9f8def2a4414a99c1f16f44025d8a2a10',
              category: 'receive',
              confirmations: 156361,
              txid:
                'd5bbcbace5c21c0317f29e7a43dbce7540f34dd5872e74d9e47fb6417c74bfe0'
            }
          }
        },
        LTC: {
          list: [],
          entities: {}
        },
        BEER: {
          list: [
            'eceef849c9c293036e5735d10e71e49caf6b4393cda16d59c1d2cefa97e316ab',
            '3273420e6fc9d3a389f38c658792554db8d0906cbedfaafd1ebdf14dfd0f5f05',
            '1216880f90b2b824ed660e8f47ba935c80716431358d46f652245ff81a911dea',
            '71213b61995239df37bab6044a417dda467f687abef6ac999afe8180623757f8',
            'e0134f8a465984ef843231d25e84014977576c68e861724b85d62b51d1e270e2',
            '84714d5b77f112f3afb1248bb4824b76a5ffedd28a115284542297863d4ceb53',
            '7081ca2dee8df647f236eda6792c65edf00cb6318a38a603b9c700194c21285c',
            '83984d624984479b1127be54108840fe87447e49795421fb5304005cef859437',
            '21bb4f685c7aa4aa08459f2fcc9fef670b307c8bf2e362219ca66210c8e2f978',
            '6777f7273f4dac8b69c63128b4d68e7b2d0fed7a4763a6dba19e3e47ba28ace7',
            '2d28a41e393ff4334818987a20694f778409e8499733a2ee73255bf0effdbc03',
            'd73f78a7ea587c74183b827878e10f96cfa067a833e01363acb63190a8a14635',
            '2da1204b3a6b8ef518ea97773004c711a1a536bf7b91559977d4547cdd764a81',
            'cdbf5618caffe4704f2696e2e2347e91414675d7e3af32d27b2cae016b83f638',
            'e9c322d08e0b81fcc0632982f4e228c5b9d48cce296e90ac06636bcc8f60b20a',
            '264acae7411749841801cc2a359152daf0f89c1553725d3f47c1a15f6ac49ef6',
            '4c070583a02eaa7ef0a8fbf4c5f172de33db323464695f3c559b6ac7b8d4fb0b',
            '1a52fbd6a5183d1520191930a8eb2e49d747a0483781baf0084ad47736a8c750',
            '8bd5aadf0bc90b5f1144117a8efe7ad99aa86a8bc0d0e2931280abcc26a2ae10',
            '88f5b986fbc02d3bb867f0b67bbe7215f7f721783d8a1bea2f36c1216a565a36',
            'fef9913eba36cb06541ae2e5abeaaed687a82c920b637b44db25c2d72f0e0cbd',
            '6079a08008cfdb3de1f684cfc9068705cfdfbe179c3d6b97b7a090800f7b4741',
            '5a86c73661dfd390a4ee73352c3f92d94d37b996f1de3ddb7a2d6020adf8f7db',
            'f4eaba62414abdc26f44952ba24492162a83a3facda3e614e32ae920fcb56755',
            'f4e7a127edb5881bcf936dd0d443d2b2bcf8deaf677e2b6517bb4e26d058e370',
            '320332b7eed291752318a6e685c636ec1e9d716e6f6d5df196757a2a5a96d4ca',
            'f1b81b5e103b3d7deced3e24c0905411eca4aa64688f24ea923ace2b121bcce4',
            '879076af07f3bd12eb226c828318b5f3134cbd119cb2e9db0feb9a9d3995ecb5',
            'd8632e6f38b4f7545938e9f0974b8be7b6652b0f3fed6bf745394717dbc3e268',
            'a071430baadc2e5e2bbe945450af0e5ebee72a213126ab2049ce768d77f7aa3c',
            '6d6fc0bcaca58cb2bd0aeb7266cdbda366571362e18f0dc62915906906a2784a',
            '787820dd9302c56d1b08b501fe9802d8d1e2576993d49fe1231b32a2125a0fc5',
            '849876dc58990f0275190ab0993c648d9e20600bda2f850a598ecee4eda6c320',
            'dea92effeb5cc1ebf49c239332769d66a222583444b69a40498ec21cbe32848c',
            'abd55c2957c91fa758125320b93bc5bc8c9f269477fe9a1812164ea90f20d2bd',
            '93cb4a86c6f8b2cb548832efc7ae1aaaab817760e0e4c88cf29415d74c408062',
            'a3c56dbb12556dcc8525353debd5e7659935f5e545ca25832469ff05e6f0f197',
            'ff2a687dd4da0d13e2fcc26508b9589bd003963ffdae9987c5a53edbb8932b17',
            'b986f0dc86b5a9583449b4d46301661b1370a0d87152139f8e9e98cc8e3cb6e2',
            'a986e65170963237b2a196e389153056e0c1aa523b5dce19547518f79ccad9b2',
            '00ec5a688791951ac963bff8e83947a6dee5a5bed6e6856c44a7f81755acd71e',
            '09ebe7cfa288a66611fa3d1459af946d7c8004df928338789364d3379b17c0a6',
            '7336f1f5ed70b59177ffeb6dfbbd2353f8d8b983d7b41d67a83c82f9cd4d5286',
            '75204938c1241647abc614c4f22c7d4ade5fc028628305773abc3d4d577154bc',
            'c79c9bc23fb9b0dea7ef8fb84226c7434781235c5fe526940d1f5a7aea9e0fd9',
            '2c303daf9c470b0b10f62ad974f45c3f7501d99a84cdc4cd65e5e56328daefc4',
            '242549cceaa94d172f6a8d4c5b047efae5f0188596b40d945bfc4b99aea90d87'
          ],
          entities: {
            d73f78a7ea587c74183b827878e10f96cfa067a833e01363acb63190a8a14635: {
              blockindex: 46347,
              time: 1540608694,
              coin: 'BEER',
              amount: -100,
              blocktime: 1540608694,
              blockhash:
                '00506a8ca8b575a5945d0af560a91b2f698d960c9ae405f96973ef153c0ea112',
              category: 'send',
              confirmations: 274,
              txid:
                'd73f78a7ea587c74183b827878e10f96cfa067a833e01363acb63190a8a14635'
            },
            ff2a687dd4da0d13e2fcc26508b9589bd003963ffdae9987c5a53edbb8932b17: {
              blockindex: 45504,
              time: 1539460840,
              coin: 'BEER',
              amount: -0.00706176,
              blocktime: 1539460840,
              blockhash:
                '0625bd6be25272ae2f00ed4f788fcec9603de9dc8619c7543a01c26941a60c41',
              category: 'send',
              confirmations: 1117,
              txid:
                'ff2a687dd4da0d13e2fcc26508b9589bd003963ffdae9987c5a53edbb8932b17'
            },
            '21bb4f685c7aa4aa08459f2fcc9fef670b307c8bf2e362219ca66210c8e2f978': {
              blockindex: 46349,
              time: 1540609276,
              coin: 'BEER',
              amount: 424,
              blocktime: 1540609276,
              blockhash:
                '03efc590f38092729a76d7fc965e72861c5da9e951aeb0c836d1c4af2feced98',
              category: 'receive',
              confirmations: 272,
              txid:
                '21bb4f685c7aa4aa08459f2fcc9fef670b307c8bf2e362219ca66210c8e2f978'
            },
            '09ebe7cfa288a66611fa3d1459af946d7c8004df928338789364d3379b17c0a6': {
              blockindex: 45489,
              time: 1539378952,
              coin: 'BEER',
              amount: -0.02383347,
              blocktime: 1539378952,
              blockhash:
                '0a78132a044d8a3227c7f677ae7dea06a6684be0a83435452092ff52ad239dc5',
              category: 'send',
              confirmations: 1132,
              txid:
                '09ebe7cfa288a66611fa3d1459af946d7c8004df928338789364d3379b17c0a6'
            },
            '5a86c73661dfd390a4ee73352c3f92d94d37b996f1de3ddb7a2d6020adf8f7db': {
              blockindex: 45697,
              time: 1539808079,
              coin: 'BEER',
              amount: -0.00397229,
              blocktime: 1539808079,
              blockhash:
                '00170d7f37c66b2365eb52fb0f2ef93d03e4824e271d846f40a3f94f96d0e080',
              category: 'send',
              confirmations: 924,
              txid:
                '5a86c73661dfd390a4ee73352c3f92d94d37b996f1de3ddb7a2d6020adf8f7db'
            },
            '8bd5aadf0bc90b5f1144117a8efe7ad99aa86a8bc0d0e2931280abcc26a2ae10': {
              blockindex: 45702,
              time: 1539812942,
              coin: 'BEER',
              amount: -0.00353089,
              blocktime: 1539812942,
              blockhash:
                '0ce84ac22c18b498299bd05895baea81a86e54e2c0b22996a1a1801659d6a0c8',
              category: 'send',
              confirmations: 919,
              txid:
                '8bd5aadf0bc90b5f1144117a8efe7ad99aa86a8bc0d0e2931280abcc26a2ae10'
            },
            f4e7a127edb5881bcf936dd0d443d2b2bcf8deaf677e2b6517bb4e26d058e370: {
              blockindex: 45681,
              time: 1539800580,
              coin: 'BEER',
              amount: -0.02383347,
              blocktime: 1539800580,
              blockhash:
                '0da236af91e1af5dc4c9ec27c0028361fad99e37eb49b4c2bfbf7ad749cfa472',
              category: 'send',
              confirmations: 940,
              txid:
                'f4e7a127edb5881bcf936dd0d443d2b2bcf8deaf677e2b6517bb4e26d058e370'
            },
            '320332b7eed291752318a6e685c636ec1e9d716e6f6d5df196757a2a5a96d4ca': {
              blockindex: 45677,
              time: 1539799544,
              coin: 'BEER',
              amount: -9.25936926,
              blocktime: 1539799544,
              blockhash:
                '063a594e4f4bb75829910885a8e767bd08414c4b8ce8fabadcaf393afcb7541e',
              category: 'send',
              confirmations: 944,
              txid:
                '320332b7eed291752318a6e685c636ec1e9d716e6f6d5df196757a2a5a96d4ca'
            },
            a071430baadc2e5e2bbe945450af0e5ebee72a213126ab2049ce768d77f7aa3c: {
              blockindex: 45662,
              time: 1539795852,
              coin: 'BEER',
              amount: -0.02383347,
              blocktime: 1539795852,
              blockhash:
                '05bd16c1a4359d91551be4eb253d41190affdf3e1a116c586a1e61eea315b423',
              category: 'send',
              confirmations: 959,
              txid:
                'a071430baadc2e5e2bbe945450af0e5ebee72a213126ab2049ce768d77f7aa3c'
            },
            '4c070583a02eaa7ef0a8fbf4c5f172de33db323464695f3c559b6ac7b8d4fb0b': {
              blockindex: 45742,
              time: 1539858487,
              coin: 'BEER',
              amount: 3.08648642,
              blocktime: 1539858487,
              blockhash:
                '059ef2dd3ac9cf12b9508200128612f9ab66a757b5c564ae5f1fcc0d14e6bdea',
              category: 'receive',
              confirmations: 879,
              txid:
                '4c070583a02eaa7ef0a8fbf4c5f172de33db323464695f3c559b6ac7b8d4fb0b'
            },
            e0134f8a465984ef843231d25e84014977576c68e861724b85d62b51d1e270e2: {
              blockindex: 46371,
              time: 1540680413,
              coin: 'BEER',
              amount: 100,
              blocktime: 1540680413,
              blockhash:
                '0c17a25baa61503c0a7ca6cab2a9b11d63abb015a8a9891f4e99ea9b1c7614b5',
              category: 'receive',
              confirmations: 250,
              txid:
                'e0134f8a465984ef843231d25e84014977576c68e861724b85d62b51d1e270e2'
            },
            dea92effeb5cc1ebf49c239332769d66a222583444b69a40498ec21cbe32848c: {
              blockindex: 45648,
              time: 1539787887,
              coin: 'BEER',
              amount: -4.62973963,
              blocktime: 1539787887,
              blockhash:
                '03ae12932590a1e97552bdbc3378ba4c99398794375c1aa3cab88df4ffbe3ed1',
              category: 'send',
              confirmations: 973,
              txid:
                'dea92effeb5cc1ebf49c239332769d66a222583444b69a40498ec21cbe32848c'
            },
            '2da1204b3a6b8ef518ea97773004c711a1a536bf7b91559977d4547cdd764a81': {
              blockindex: 46347,
              time: 1540608694,
              coin: 'BEER',
              amount: -100,
              blocktime: 1540608694,
              blockhash:
                '00506a8ca8b575a5945d0af560a91b2f698d960c9ae405f96973ef153c0ea112',
              category: 'send',
              confirmations: 274,
              txid:
                '2da1204b3a6b8ef518ea97773004c711a1a536bf7b91559977d4547cdd764a81'
            },
            '6d6fc0bcaca58cb2bd0aeb7266cdbda366571362e18f0dc62915906906a2784a': {
              blockindex: 45661,
              time: 1539793837,
              coin: 'BEER',
              amount: -0.00595845,
              blocktime: 1539793837,
              blockhash:
                '0a7d87dc584f6a9287ed9d7e6a65be6fa6219b86ee34373c916000ce7e04fdc3',
              category: 'send',
              confirmations: 960,
              txid:
                '6d6fc0bcaca58cb2bd0aeb7266cdbda366571362e18f0dc62915906906a2784a'
            },
            f4eaba62414abdc26f44952ba24492162a83a3facda3e614e32ae920fcb56755: {
              blockindex: 45683,
              time: 1539800659,
              coin: 'BEER',
              amount: -18.51862853,
              blocktime: 1539800659,
              blockhash:
                '0c04f1c0a6c71fcc08a4dcff3b4fcc2d2907604e16b5bdf69f65fc270edddd08',
              category: 'send',
              confirmations: 938,
              txid:
                'f4eaba62414abdc26f44952ba24492162a83a3facda3e614e32ae920fcb56755'
            },
            '93cb4a86c6f8b2cb548832efc7ae1aaaab817760e0e4c88cf29415d74c408062': {
              blockindex: 45642,
              time: 1539781075,
              coin: 'BEER',
              amount: -18.51862853,
              blocktime: 1539781075,
              blockhash:
                '01336fbcfac10fa73987af0124f7dfdcc7055bdae17177273a87f143e1129844',
              category: 'send',
              confirmations: 979,
              txid:
                '93cb4a86c6f8b2cb548832efc7ae1aaaab817760e0e4c88cf29415d74c408062'
            },
            '6777f7273f4dac8b69c63128b4d68e7b2d0fed7a4763a6dba19e3e47ba28ace7': {
              blockindex: 46348,
              time: 1540608932,
              coin: 'BEER',
              amount: -100,
              blocktime: 1540608932,
              blockhash:
                '085f33c397b264ae7eecfd0d86129ef8e90feb60a29b12db1a479a10c07010ac',
              category: 'send',
              confirmations: 273,
              txid:
                '6777f7273f4dac8b69c63128b4d68e7b2d0fed7a4763a6dba19e3e47ba28ace7'
            },
            a986e65170963237b2a196e389153056e0c1aa523b5dce19547518f79ccad9b2: {
              blockindex: 45492,
              time: 1539380196,
              coin: 'BEER',
              amount: -0.00595845,
              blocktime: 1539380196,
              blockhash:
                '0b41fa74113038f717333a92fb29846f7ebede09e4d16af887af1e47fbd3b44a',
              category: 'send',
              confirmations: 1129,
              txid:
                'a986e65170963237b2a196e389153056e0c1aa523b5dce19547518f79ccad9b2'
            },
            '75204938c1241647abc614c4f22c7d4ade5fc028628305773abc3d4d577154bc': {
              blockindex: 45485,
              time: 1539376288,
              coin: 'BEER',
              amount: -0.05122276,
              blocktime: 1539376288,
              blockhash:
                '06cde00fad9ded3eb59c5d8aa70c0d8dd600dcb67b1b3418a496b7685e9860fb',
              category: 'send',
              confirmations: 1136,
              txid:
                '75204938c1241647abc614c4f22c7d4ade5fc028628305773abc3d4d577154bc'
            },
            '242549cceaa94d172f6a8d4c5b047efae5f0188596b40d945bfc4b99aea90d87': {
              blockindex: 45481,
              time: 1539375758,
              coin: 'BEER',
              amount: -18.51862853,
              blocktime: 1539375758,
              blockhash:
                '03ecf4e5eda8fda66b68900177063be5e9d831e7f442443ebf7f48bdff2d1a14',
              category: 'send',
              confirmations: 1140,
              txid:
                '242549cceaa94d172f6a8d4c5b047efae5f0188596b40d945bfc4b99aea90d87'
            },
            '849876dc58990f0275190ab0993c648d9e20600bda2f850a598ecee4eda6c320': {
              blockindex: 45657,
              time: 1539791890,
              coin: 'BEER',
              amount: -0.00595845,
              blocktime: 1539791890,
              blockhash:
                '00dcbda7700812cda7fcfec55cc5ab84a25a4a9ab828855b4ef3087a63ab517c',
              category: 'send',
              confirmations: 964,
              txid:
                '849876dc58990f0275190ab0993c648d9e20600bda2f850a598ecee4eda6c320'
            },
            '1216880f90b2b824ed660e8f47ba935c80716431358d46f652245ff81a911dea': {
              blockindex: 46479,
              time: 1541002179,
              coin: 'BEER',
              amount: -50,
              blocktime: 1541002179,
              blockhash:
                '070110e72146b0deac0cc0835efe6d98230e1df1dcadf7aba5c2db6fc46e0c74',
              category: 'send',
              confirmations: 142,
              txid:
                '1216880f90b2b824ed660e8f47ba935c80716431358d46f652245ff81a911dea'
            },
            '83984d624984479b1127be54108840fe87447e49795421fb5304005cef859437': {
              blockindex: 46368,
              time: 1540678044,
              coin: 'BEER',
              amount: -50,
              blocktime: 1540678044,
              blockhash:
                '0a64ae4b00c06ee6c7dd7cb80c14ad18720c3a71c96893541b2de685b44e0c57',
              category: 'send',
              confirmations: 253,
              txid:
                '83984d624984479b1127be54108840fe87447e49795421fb5304005cef859437'
            },
            '879076af07f3bd12eb226c828318b5f3134cbd119cb2e9db0feb9a9d3995ecb5': {
              blockindex: 45674,
              time: 1539798533,
              coin: 'BEER',
              amount: -18.51862853,
              blocktime: 1539798533,
              blockhash:
                '00911e2ad6ee267c1b5a8d911bf0b9549f873ed4b42dc6b684dab6a00d2cfec6',
              category: 'send',
              confirmations: 947,
              txid:
                '879076af07f3bd12eb226c828318b5f3134cbd119cb2e9db0feb9a9d3995ecb5'
            },
            '2c303daf9c470b0b10f62ad974f45c3f7501d99a84cdc4cd65e5e56328daefc4': {
              blockindex: 45483,
              time: 1539376177,
              coin: 'BEER',
              amount: -0.01191679,
              blocktime: 1539376177,
              blockhash:
                '01e4594a6a0e954cb2a83a680f80538de62b21e03597d9b1ab48c957f37ee992',
              category: 'send',
              confirmations: 1138,
              txid:
                '2c303daf9c470b0b10f62ad974f45c3f7501d99a84cdc4cd65e5e56328daefc4'
            },
            '2d28a41e393ff4334818987a20694f778409e8499733a2ee73255bf0effdbc03': {
              blockindex: 46348,
              time: 1540608932,
              coin: 'BEER',
              amount: -100,
              blocktime: 1540608932,
              blockhash:
                '085f33c397b264ae7eecfd0d86129ef8e90feb60a29b12db1a479a10c07010ac',
              category: 'send',
              confirmations: 273,
              txid:
                '2d28a41e393ff4334818987a20694f778409e8499733a2ee73255bf0effdbc03'
            },
            cdbf5618caffe4704f2696e2e2347e91414675d7e3af32d27b2cae016b83f638: {
              blockindex: 45753,
              time: 1539867385,
              coin: 'BEER',
              amount: -0.00235391,
              blocktime: 1539867385,
              blockhash:
                '0a8a3c993d0f00b77ad9ac02620ecf21d5541af6809a7e474185f4e92de539a7',
              category: 'send',
              confirmations: 868,
              txid:
                'cdbf5618caffe4704f2696e2e2347e91414675d7e3af32d27b2cae016b83f638'
            },
            '00ec5a688791951ac963bff8e83947a6dee5a5bed6e6856c44a7f81755acd71e': {
              blockindex: 45490,
              time: 1539379067,
              coin: 'BEER',
              amount: -18.51862853,
              blocktime: 1539379067,
              blockhash:
                '04b7315d60e8b7bd6647a1b0524a377f4c115de5d74deb59b8bcc95e145e7a42',
              category: 'send',
              confirmations: 1131,
              txid:
                '00ec5a688791951ac963bff8e83947a6dee5a5bed6e6856c44a7f81755acd71e'
            },
            '71213b61995239df37bab6044a417dda467f687abef6ac999afe8180623757f8': {
              blockindex: 46420,
              time: 1540835688,
              coin: 'BEER',
              amount: 0.27255435,
              blocktime: 1540835688,
              blockhash:
                '03784dc61dd0e8daa10225881df61203ad0ec1ecc7911d62f4c799eba444edc6',
              category: 'receive',
              confirmations: 201,
              txid:
                '71213b61995239df37bab6044a417dda467f687abef6ac999afe8180623757f8'
            },
            '7336f1f5ed70b59177ffeb6dfbbd2353f8d8b983d7b41d67a83c82f9cd4d5286': {
              blockindex: 45487,
              time: 1539376404,
              coin: 'BEER',
              amount: -39.8001102,
              blocktime: 1539376404,
              blockhash:
                '003f78d44e122e13e2198b9e6b95a18ec1d32a14243a095f5a8f994265f3ac5f',
              category: 'send',
              confirmations: 1134,
              txid:
                '7336f1f5ed70b59177ffeb6dfbbd2353f8d8b983d7b41d67a83c82f9cd4d5286'
            },
            '787820dd9302c56d1b08b501fe9802d8d1e2576993d49fe1231b32a2125a0fc5': {
              blockindex: 45659,
              time: 1539791975,
              coin: 'BEER',
              amount: -4.62973963,
              blocktime: 1539791975,
              blockhash:
                '0284f011b49d08d83603a0d8cb88f8db2d98a1502b6d3ed8f7445a8b4c34cc0f',
              category: 'send',
              confirmations: 962,
              txid:
                '787820dd9302c56d1b08b501fe9802d8d1e2576993d49fe1231b32a2125a0fc5'
            },
            eceef849c9c293036e5735d10e71e49caf6b4393cda16d59c1d2cefa97e316ab: {
              blockindex: 46540,
              time: 1541253182,
              coin: 'BEER',
              amount: -0.01191679,
              blocktime: 1541253182,
              blockhash:
                '028a9d044bfbeab7f67c07b35e30a3627b98ef4085ef96caaae1721e61538c30',
              category: 'send',
              confirmations: 81,
              txid:
                'eceef849c9c293036e5735d10e71e49caf6b4393cda16d59c1d2cefa97e316ab'
            },
            '88f5b986fbc02d3bb867f0b67bbe7215f7f721783d8a1bea2f36c1216a565a36': {
              blockindex: 45700,
              time: 1539811748,
              coin: 'BEER',
              amount: -3.25155563,
              blocktime: 1539811748,
              blockhash:
                '08f09d751b0d96f40ea4bff1a3f5e93b255380a5bdd45d5be849d5c0e43fafbb',
              category: 'send',
              confirmations: 921,
              txid:
                '88f5b986fbc02d3bb867f0b67bbe7215f7f721783d8a1bea2f36c1216a565a36'
            },
            f1b81b5e103b3d7deced3e24c0905411eca4aa64688f24ea923ace2b121bcce4: {
              blockindex: 45676,
              time: 1539799366,
              coin: 'BEER',
              amount: -0.01191679,
              blocktime: 1539799366,
              blockhash:
                '0256818e297055aeac21b1cfbafbd62f17655f28aa6a323feaf921615258b1d4',
              category: 'send',
              confirmations: 945,
              txid:
                'f1b81b5e103b3d7deced3e24c0905411eca4aa64688f24ea923ace2b121bcce4'
            },
            '3273420e6fc9d3a389f38c658792554db8d0906cbedfaafd1ebdf14dfd0f5f05': {
              blockindex: 46539,
              time: 1541252183,
              coin: 'BEER',
              amount: -0.01191679,
              blocktime: 1541252183,
              blockhash:
                '010322062caebb7ce55a51fcd0ea855f6b4631fb8dea875f93ec48346501c004',
              category: 'send',
              confirmations: 82,
              txid:
                '3273420e6fc9d3a389f38c658792554db8d0906cbedfaafd1ebdf14dfd0f5f05'
            },
            abd55c2957c91fa758125320b93bc5bc8c9f269477fe9a1812164ea90f20d2bd: {
              blockindex: 45647,
              time: 1539787562,
              coin: 'BEER',
              amount: -0.00595845,
              blocktime: 1539787562,
              blockhash:
                '0d2c306d1adec27e4d9d14f6170f700583d34cd9353848e2cd166f7ea0f39185',
              category: 'send',
              confirmations: 974,
              txid:
                'abd55c2957c91fa758125320b93bc5bc8c9f269477fe9a1812164ea90f20d2bd'
            },
            b986f0dc86b5a9583449b4d46301661b1370a0d87152139f8e9e98cc8e3cb6e2: {
              blockindex: 45493,
              time: 1539380317,
              coin: 'BEER',
              amount: -4.62973963,
              blocktime: 1539380317,
              blockhash:
                '0510ac7b1defb6a9bef8e65493962fa687b1991a5115b17b4e14f1f5a913eb88',
              category: 'send',
              confirmations: 1128,
              txid:
                'b986f0dc86b5a9583449b4d46301661b1370a0d87152139f8e9e98cc8e3cb6e2'
            },
            c79c9bc23fb9b0dea7ef8fb84226c7434781235c5fe526940d1f5a7aea9e0fd9: {
              blockindex: 45484,
              time: 1539376266,
              coin: 'BEER',
              amount: -9.25936926,
              blocktime: 1539376266,
              blockhash:
                '00b262ad95a809abd60282088f03a1b30735bb055e926c5c42ea4cf014e5a6b7',
              category: 'send',
              confirmations: 1137,
              txid:
                'c79c9bc23fb9b0dea7ef8fb84226c7434781235c5fe526940d1f5a7aea9e0fd9'
            },
            fef9913eba36cb06541ae2e5abeaaed687a82c920b637b44db25c2d72f0e0cbd: {
              blockindex: 45699,
              time: 1539811651,
              coin: 'BEER',
              amount: -0.00418473,
              blocktime: 1539811651,
              blockhash:
                '0bde20f5c4576620f2574fcfe896277f81c0615dd1e049ba51b0d9b319adc28e',
              category: 'send',
              confirmations: 922,
              txid:
                'fef9913eba36cb06541ae2e5abeaaed687a82c920b637b44db25c2d72f0e0cbd'
            },
            e9c322d08e0b81fcc0632982f4e228c5b9d48cce296e90ac06636bcc8f60b20a: {
              blockindex: 45751,
              time: 1539866565,
              coin: 'BEER',
              amount: -1.6257872,
              blocktime: 1539866565,
              blockhash:
                '0b452d0b28c7bdca97b76d13a7bc8d55a04761a7f0488608a9dbc5fc10b55c4d',
              category: 'send',
              confirmations: 870,
              txid:
                'e9c322d08e0b81fcc0632982f4e228c5b9d48cce296e90ac06636bcc8f60b20a'
            },
            '84714d5b77f112f3afb1248bb4824b76a5ffedd28a115284542297863d4ceb53': {
              blockindex: 46370,
              time: 1540680313,
              coin: 'BEER',
              amount: -100,
              blocktime: 1540680313,
              blockhash:
                '0db6f20e7cbf52dc3048d389d5328ec64f4a170a75fca93956edf03fbfb191c7',
              category: 'send',
              confirmations: 251,
              txid:
                '84714d5b77f112f3afb1248bb4824b76a5ffedd28a115284542297863d4ceb53'
            },
            '1a52fbd6a5183d1520191930a8eb2e49d747a0483781baf0084ad47736a8c750': {
              blockindex: 45703,
              time: 1539813117,
              coin: 'BEER',
              amount: -2.74352385,
              blocktime: 1539813117,
              blockhash:
                '0acd3aa47833b2c679b5c4805de7b8ca4dd087f6faf1a3523f9352d474524a91',
              category: 'send',
              confirmations: 918,
              txid:
                '1a52fbd6a5183d1520191930a8eb2e49d747a0483781baf0084ad47736a8c750'
            },
            '6079a08008cfdb3de1f684cfc9068705cfdfbe179c3d6b97b7a090800f7b4741': {
              blockindex: 45698,
              time: 1539809560,
              coin: 'BEER',
              amount: -3.08649642,
              blocktime: 1539809560,
              blockhash:
                '07a0b38ea7facdbc63aae2b434aafca8dedbd371b55053684885ffb8f9374e72',
              category: 'send',
              confirmations: 923,
              txid:
                '6079a08008cfdb3de1f684cfc9068705cfdfbe179c3d6b97b7a090800f7b4741'
            },
            a3c56dbb12556dcc8525353debd5e7659935f5e545ca25832469ff05e6f0f197: {
              blockindex: 45641,
              time: 1539780691,
              coin: 'BEER',
              amount: -0.02383347,
              blocktime: 1539780691,
              blockhash:
                '0d3e3b379c1bc3418547225e13f780b89d8d42f985cb0e9a52309455c647bc46',
              category: 'send',
              confirmations: 980,
              txid:
                'a3c56dbb12556dcc8525353debd5e7659935f5e545ca25832469ff05e6f0f197'
            },
            '7081ca2dee8df647f236eda6792c65edf00cb6318a38a603b9c700194c21285c': {
              blockindex: 46369,
              time: 1540679242,
              coin: 'BEER',
              amount: 50,
              blocktime: 1540679242,
              blockhash:
                '0dd3eb4a1013cbaad482823b21e5440d43abc85d1470fa1b6dd2e5ef87fe8fad',
              category: 'receive',
              confirmations: 252,
              txid:
                '7081ca2dee8df647f236eda6792c65edf00cb6318a38a603b9c700194c21285c'
            },
            d8632e6f38b4f7545938e9f0974b8be7b6652b0f3fed6bf745394717dbc3e268: {
              blockindex: 45673,
              time: 1539798375,
              coin: 'BEER',
              amount: -0.02383347,
              blocktime: 1539798375,
              blockhash:
                '029361965eef5bd22ebd7d3d08418a985a526f7673dd297f76f56b8779061ac6',
              category: 'send',
              confirmations: 948,
              txid:
                'd8632e6f38b4f7545938e9f0974b8be7b6652b0f3fed6bf745394717dbc3e268'
            },
            '264acae7411749841801cc2a359152daf0f89c1553725d3f47c1a15f6ac49ef6': {
              blockindex: 45750,
              time: 1539864500,
              coin: 'BEER',
              amount: -0.00209236,
              blocktime: 1539864500,
              blockhash:
                '03e04b7b055ea422e9035bd31a38b843c40316704d4463aaa9e53b383f837e26',
              category: 'send',
              confirmations: 871,
              txid:
                '264acae7411749841801cc2a359152daf0f89c1553725d3f47c1a15f6ac49ef6'
            }
          }
        },
        KMD: {
          list: [
            '81aa8e0b4a16310ccaf7549b4f96b4511a98576894a8fc801aa71566035b1b61',
            '8b629f28b510849ccb5441fdb387be16e13d5cf15018631154a58465ce23876b',
            '812e7d7cbb71dbef90301d087f14f74a2264293df5c1bf04338e9d2a07ae2340',
            '59471c5b2b5f2af768af16634ec8c06356132cc6a3aa13a5d6b7790e1201bf97',
            'e15178455a12f15a1bb4b9de700536a17773c991dd44424619c35c15d29eabb7',
            'bc2f2dcd4548adf38c1c709fe9b7131f9731925cfca0cb1aab7369b19fcd0d8d',
            'f7a5e19eff9006b43e4e77950c376a15979aea9b55ef7a8bbd03249c139986c7',
            '76485a53b299ce348e15a866fea5de9f61410844638ae6a246b1894490cf017d',
            '548b7919aa21fbb497f5701c7cb1707807b92230aabd6777742f45dbda4b5b5f',
            'aafa6b496c0cb6cddce81fa906b3a90a8240a9bb5685c923557d433f664a5e82',
            '3ae2854df80c23ec8bf039f347a79f604326dfd0b1bdecece6e14cab43369265',
            '0f8edbef4c5ee93ad036a772c4716745ae1e7c9a0c33f93f4822f8e37c87330c',
            '2f977550649f444f2a98c8ec11df7a815c51563a4674bdbda3ca90bf463569eb',
            'a01cb1076b6bfb92c43dd8da826b7e8532638cfd9fbbbf5d80d63164f630828d',
            'dfc449e7ce6f6e10028cf01fe63e72d2e99cdf51414995818b84bcb6852260e2',
            '616a8294194bee9b91ba00a047ddf12811c042e505d6306592bf01b4acca3bb6',
            'b5fe9ad031ec1dee9795a2e1aaa3f4d993042a988334c929fd9d55187596f32d',
            'f80a5d7ca55892426eb36cc845b6bcdc12f673aa8e86eadee6c63d1f18afbf4b',
            '352d203e93b683c451af6db6651bb61d4e01d736036fed16db2ccb61010a0d67',
            '25d787631e7a2545ea912a9636f72ae0d1146dbe81ee3ab22612526efc7801d1',
            'e346d37464425f6a99ac1171449f2315496d50af63d8d00fe9e0ee76a465508d',
            '56068fe1bed4d8ac44c862c81152f96f24a22a2c6b7b442aca1f2542cf0c1622',
            '6daaf96dcbbd523465c52861291e323189e46787506e6dbb33e00f36c0fc7f92',
            '620ef6d73d2e683082e056edda5db47ad2499a3c50c96f613edebc00dcebeb0e',
            'cd32c3a3d138b8224c6ab2e1a99783277ffe2e416cf347d12fdb03cf83df7129',
            '58d9d265aa85cebc5ab7538efc940d9addb6c99edd8bd57da6f05203f8e07c26',
            '30aa80349b73a670a195533fa562936439cfe1efb4fd4597edb08df29ba255d9',
            'a0eaaa9d36550c39f63932b6b5823b7c87fc43c97b5433f68b5fe1d710fe5724',
            '9c700ad3872249aed17caac4c14d0ddd39d89899267527f310ab302e9e71c806',
            'eb5e7c656d8c4e8b747509eff87e62837e3edf42944e4f9d28d93a7db4f9fdeb',
            '9f1af53f33103eadd2b13a4f5261cba2909fe2d2329d1c4c3cf5b94b0111ff50',
            '39b9fcfd66eca5651bbc09f5eb1d26789a9620a6d3d734b7c176f96954e0b537',
            'aad5992c6a5c3c38836aabe76276f2e0b034eed6d55af6815c7f11822b530721',
            'd709c0c9f5742d6e335b433df128097921fdf10f1ed37d49c6fc628232580bcc',
            'b5a19a3f40d8292d8a3e4d5af3f7e95deb6a87ba66097941108f852d68378322',
            '5f4cd2b1aef137dbd409e431f401ec7fc7c25020f76f38d87d83db53a1b3b1bf',
            'f8e0ff61d2406c92ed68491275852b61bd16640f9cc40dbc3eda7a527ed30e93',
            '7c886095c78a671d15e4cca972ac20f4be8c00d83ce9de3e6a147f7b24324a7f',
            '159258e303fe03fee8751aa6dbd239648186e31e902a1341ad806c4dfe1fccf3',
            '22a06182fe82d260b93d44b1050ee07a7d88766fa5ebf281e9e693952a7af824',
            '211c8310831a7a73ffeaaae20e8543d0f772140df4dfc49d009214c822df0f54',
            '9d39c0b94374ebb8a9d6c546692c10afdca386c18d8993305ff05508b29fe687',
            'e4557237d9d7aa092c62ef163a0c03dcc272b52039df7cd69aba198b6764a18e',
            '9de0927a517b3a064748d89bba55325622aa99ed034eb5eb00a3f841ef40243d',
            '604939640861771f6afe45c19e8f28103f54735fdd5aca72654917810ce3488a',
            'f226273097f4358ef5338f6ab0872b309946fd94350c05d5e2cfb75cfd5328bb',
            '78bb259267a6a48a22705b3ab6e27cb40ff92a149c102d53a43004545687d7f6',
            '428594160533d8a68e46561ccffba08b63a2840997a361868309f39a340b77dd',
            '1e6fb726d4a8643a03dc2d69b35ea9235af4308333b9a5f657b1a0b28da9dccf',
            'eaa4fc7adfa80e065df503c243b4953acca541a9418273b824b6a9fbbdba3e5e',
            '76193ba88387d3c2fb60ae4bc4533f6c4da8cc3301147415741a2ca1094ceb51',
            '5f6fccb09f0b132d1233e3c5624fd42c4b8321b2614fe0c73e5fd61f34359802',
            '9755a816fafb0d4590017f01704c29941d5c72db5ca5d31e81665c5b451a892a',
            '6fdeafb99e36ec3f797d72f5176fd830d7f2af260f20585271aae48decc30444',
            '87a87e32d0db0f9accf5d7e2f110992ef6f512c589f34c3a331e9cc4154a94bd',
            '55591c94dc07fb2c58716216bb8c4de3ed604cf6b5fca09c70641b2535fc51cc'
          ],
          entities: {
            f80a5d7ca55892426eb36cc845b6bcdc12f673aa8e86eadee6c63d1f18afbf4b: {
              blockindex: 1033586,
              time: 1538386841,
              coin: 'KMD',
              amount: -0.1429877,
              blocktime: 1538386841,
              blockhash:
                '0c34c4dbb9297b671e6ba08f3d385057b598c187a55b15760da00dffb5a7bc16',
              category: 'send',
              confirmations: 57256,
              txid:
                'f80a5d7ca55892426eb36cc845b6bcdc12f673aa8e86eadee6c63d1f18afbf4b'
            },
            '9f1af53f33103eadd2b13a4f5261cba2909fe2d2329d1c4c3cf5b94b0111ff50': {
              blockindex: 1031290,
              time: 1538249180,
              coin: 'KMD',
              amount: -0.00059594,
              blocktime: 1538249180,
              blockhash:
                '094505173e02135b026fe1caed2aba37d8aa1528ff0798c9ddb4bd51e93e9b14',
              category: 'send',
              confirmations: 59552,
              txid:
                '9f1af53f33103eadd2b13a4f5261cba2909fe2d2329d1c4c3cf5b94b0111ff50'
            },
            f8e0ff61d2406c92ed68491275852b61bd16640f9cc40dbc3eda7a527ed30e93: {
              blockindex: 960850,
              time: 1534002109,
              coin: 'KMD',
              amount: -0.0427253,
              blocktime: 1534002109,
              blockhash:
                '00c9247d73ce7fe341b2d6c94d1a3ff8a2bf8ec334e365a9234e8b21ce4f74a0',
              category: 'send',
              confirmations: 129992,
              txid:
                'f8e0ff61d2406c92ed68491275852b61bd16640f9cc40dbc3eda7a527ed30e93'
            },
            '5f6fccb09f0b132d1233e3c5624fd42c4b8321b2614fe0c73e5fd61f34359802': {
              blockindex: 876069,
              time: 1528853343,
              coin: 'KMD',
              amount: -0.00017243,
              blocktime: 1528853343,
              blockhash:
                '0000001a6c293faf937586a3f7354ccab24f7a890b9ee3ba84bcce94d57008a3',
              category: 'send',
              confirmations: 214773,
              txid:
                '5f6fccb09f0b132d1233e3c5624fd42c4b8321b2614fe0c73e5fd61f34359802'
            },
            '1e6fb726d4a8643a03dc2d69b35ea9235af4308333b9a5f657b1a0b28da9dccf': {
              blockindex: 877612,
              time: 1528945938,
              coin: 'KMD',
              amount: -0.01407397,
              blocktime: 1528945938,
              blockhash:
                '07f4808e812164747dafb06fc729b3e00a3a5f9f9dfb17a373e27b4f9cd4369a',
              category: 'send',
              confirmations: 213230,
              txid:
                '1e6fb726d4a8643a03dc2d69b35ea9235af4308333b9a5f657b1a0b28da9dccf'
            },
            '548b7919aa21fbb497f5701c7cb1707807b92230aabd6777742f45dbda4b5b5f': {
              blockindex: 1035420,
              time: 1538497378,
              coin: 'KMD',
              amount: -0.09270259,
              blocktime: 1538497378,
              blockhash:
                '01a24bb68df2b1158851d7e4b4753cd004cfb72b0bcdd7a4ed555afb6c0818e9',
              category: 'send',
              confirmations: 55422,
              txid:
                '548b7919aa21fbb497f5701c7cb1707807b92230aabd6777742f45dbda4b5b5f'
            },
            '9c700ad3872249aed17caac4c14d0ddd39d89899267527f310ab302e9e71c806': {
              blockindex: 1031302,
              time: 1538249874,
              coin: 'KMD',
              amount: -0.00059594,
              blocktime: 1538249874,
              blockhash:
                '00000000460546f691d164b96239881484799bbfc76380293736f76fef5083e2',
              category: 'send',
              confirmations: 59540,
              txid:
                '9c700ad3872249aed17caac4c14d0ddd39d89899267527f310ab302e9e71c806'
            },
            '7c886095c78a671d15e4cca972ac20f4be8c00d83ce9de3e6a147f7b24324a7f': {
              blockindex: 960844,
              time: 1534001723,
              coin: 'KMD',
              amount: -0.00005496,
              blocktime: 1534001723,
              blockhash:
                '00000000a8c456bdb2813dae9986302561529be3afc6a120884922fe38b16b3c',
              category: 'send',
              confirmations: 129998,
              txid:
                '7c886095c78a671d15e4cca972ac20f4be8c00d83ce9de3e6a147f7b24324a7f'
            },
            '22a06182fe82d260b93d44b1050ee07a7d88766fa5ebf281e9e693952a7af824': {
              blockindex: 929434,
              time: 1532098235,
              coin: 'KMD',
              amount: -0.00213503,
              blocktime: 1532098235,
              blockhash:
                '0000000539a8f2677ea47ff5cfbb68c7eb53638e1d5f9a39bdafe77ef9008001',
              category: 'send',
              confirmations: 161408,
              txid:
                '22a06182fe82d260b93d44b1050ee07a7d88766fa5ebf281e9e693952a7af824'
            },
            a01cb1076b6bfb92c43dd8da826b7e8532638cfd9fbbbf5d80d63164f630828d: {
              blockindex: 1035044,
              time: 1538474787,
              coin: 'KMD',
              amount: -0.09270259,
              blocktime: 1538474787,
              blockhash:
                '0000000248d911c5c1fc109f5d79aba3e7682453b83469772074e66df2ca9f4c',
              category: 'send',
              confirmations: 55798,
              txid:
                'a01cb1076b6bfb92c43dd8da826b7e8532638cfd9fbbbf5d80d63164f630828d'
            },
            '76193ba88387d3c2fb60ae4bc4533f6c4da8cc3301147415741a2ca1094ceb51': {
              blockindex: 876076,
              time: 1528853499,
              coin: 'KMD',
              amount: -0.13400177,
              blocktime: 1528853499,
              blockhash:
                '0b1d0d2f4883831bda186c468c44594c9071b2c3af928b3c72b1655caf30aef7',
              category: 'send',
              confirmations: 214766,
              txid:
                '76193ba88387d3c2fb60ae4bc4533f6c4da8cc3301147415741a2ca1094ceb51'
            },
            '352d203e93b683c451af6db6651bb61d4e01d736036fed16db2ccb61010a0d67': {
              blockindex: 1033580,
              time: 1538386447,
              coin: 'KMD',
              amount: -0.00018399,
              blocktime: 1538386447,
              blockhash:
                '0e34c81b0e1ff4ae6aff64c71562f64461934193c170e9d1a55edf4a273fab36',
              category: 'send',
              confirmations: 57262,
              txid:
                '352d203e93b683c451af6db6651bb61d4e01d736036fed16db2ccb61010a0d67'
            },
            eb5e7c656d8c4e8b747509eff87e62837e3edf42944e4f9d28d93a7db4f9fdeb: {
              blockindex: 1031291,
              time: 1538249260,
              coin: 'KMD',
              amount: -0.46307295,
              blocktime: 1538249260,
              blockhash:
                '0aabc03935a2bcae99948dc2216602a2f9bfa13d593c670303904ec7cdff5282',
              category: 'send',
              confirmations: 59551,
              txid:
                'eb5e7c656d8c4e8b747509eff87e62837e3edf42944e4f9d28d93a7db4f9fdeb'
            },
            '30aa80349b73a670a195533fa562936439cfe1efb4fd4597edb08df29ba255d9': {
              blockindex: 1031336,
              time: 1538252039,
              coin: 'KMD',
              amount: -0.00059594,
              blocktime: 1538252039,
              blockhash:
                '08e2dafbfaf63185de039ca8fc25d65c7cb2fab12d8304cfd99918b34ae15d18',
              category: 'send',
              confirmations: 59506,
              txid:
                '30aa80349b73a670a195533fa562936439cfe1efb4fd4597edb08df29ba255d9'
            },
            '812e7d7cbb71dbef90301d087f14f74a2264293df5c1bf04338e9d2a07ae2340': {
              blockindex: 1039750,
              time: 1538758352,
              coin: 'KMD',
              amount: -0.06307296,
              blocktime: 1538758352,
              blockhash:
                '0b082264a6ba1c94c3006dadb192aa76c0c182358b1e8cdd9503092c4328df31',
              category: 'send',
              confirmations: 51092,
              txid:
                '812e7d7cbb71dbef90301d087f14f74a2264293df5c1bf04338e9d2a07ae2340'
            },
            '604939640861771f6afe45c19e8f28103f54735fdd5aca72654917810ce3488a': {
              blockindex: 924788,
              time: 1531815545,
              coin: 'KMD',
              amount: 0.30506322,
              blocktime: 1531815545,
              blockhash:
                '0befff129b52d07728e92a797c4b503e993dcb7dc2a7cebab0ed25bdf081f573',
              category: 'receive',
              confirmations: 166054,
              txid:
                '604939640861771f6afe45c19e8f28103f54735fdd5aca72654917810ce3488a'
            },
            b5a19a3f40d8292d8a3e4d5af3f7e95deb6a87ba66097941108f852d68378322: {
              blockindex: 1010494,
              time: 1536997770,
              coin: 'KMD',
              amount: -0.00011928,
              blocktime: 1536997770,
              blockhash:
                '0000000101cc83b6aad3691458b9da1eaf0c5ef7dd328fb2cf17edb3dba5a647',
              category: 'send',
              confirmations: 80348,
              txid:
                'b5a19a3f40d8292d8a3e4d5af3f7e95deb6a87ba66097941108f852d68378322'
            },
            f226273097f4358ef5338f6ab0872b309946fd94350c05d5e2cfb75cfd5328bb: {
              blockindex: 889630,
              time: 1529678637,
              coin: 'KMD',
              amount: -0.11885143,
              blocktime: 1529678637,
              blockhash:
                '0e3fc7b82625096395421782486a797771dddb7c0f3de191abef1330e2299606',
              category: 'send',
              confirmations: 201212,
              txid:
                'f226273097f4358ef5338f6ab0872b309946fd94350c05d5e2cfb75cfd5328bb'
            },
            a0eaaa9d36550c39f63932b6b5823b7c87fc43c97b5433f68b5fe1d710fe5724: {
              blockindex: 1031302,
              time: 1538249874,
              coin: 'KMD',
              amount: -0.46307295,
              blocktime: 1538249874,
              blockhash:
                '00000000460546f691d164b96239881484799bbfc76380293736f76fef5083e2',
              category: 'send',
              confirmations: 59540,
              txid:
                'a0eaaa9d36550c39f63932b6b5823b7c87fc43c97b5433f68b5fe1d710fe5724'
            },
            '9d39c0b94374ebb8a9d6c546692c10afdca386c18d8993305ff05508b29fe687': {
              blockindex: 925428,
              time: 1531854248,
              coin: 'KMD',
              amount: -0.00004083,
              blocktime: 1531854248,
              blockhash:
                '0915f916e20f5cc922a3bc523e8dacd391ee590f7837d0cdbee4ed3e76e95845',
              category: 'send',
              confirmations: 165414,
              txid:
                '9d39c0b94374ebb8a9d6c546692c10afdca386c18d8993305ff05508b29fe687'
            },
            e4557237d9d7aa092c62ef163a0c03dcc272b52039df7cd69aba198b6764a18e: {
              blockindex: 925428,
              time: 1531854248,
              coin: 'KMD',
              amount: -0.03174964,
              blocktime: 1531854248,
              blockhash:
                '0915f916e20f5cc922a3bc523e8dacd391ee590f7837d0cdbee4ed3e76e95845',
              category: 'send',
              confirmations: 165414,
              txid:
                'e4557237d9d7aa092c62ef163a0c03dcc272b52039df7cd69aba198b6764a18e'
            },
            '9de0927a517b3a064748d89bba55325622aa99ed034eb5eb00a3f841ef40243d': {
              blockindex: 925421,
              time: 1531853737,
              coin: 'KMD',
              amount: 0.03107496,
              blocktime: 1531853737,
              blockhash:
                '000000012d534f88cf1436e576933acacfc78bd04bf241ea2a358c4f8ab21c88',
              category: 'receive',
              confirmations: 165421,
              txid:
                '9de0927a517b3a064748d89bba55325622aa99ed034eb5eb00a3f841ef40243d'
            },
            '76485a53b299ce348e15a866fea5de9f61410844638ae6a246b1894490cf017d': {
              blockindex: 1035454,
              time: 1538499575,
              coin: 'KMD',
              amount: -0.00011928,
              blocktime: 1538499575,
              blockhash:
                '0a78be4a2e078ff06a4b2dd7d3a02eb2c0c903cb8be7b4b8315883073fb4f000',
              category: 'send',
              confirmations: 55388,
              txid:
                '76485a53b299ce348e15a866fea5de9f61410844638ae6a246b1894490cf017d'
            },
            '428594160533d8a68e46561ccffba08b63a2840997a361868309f39a340b77dd': {
              blockindex: 888466,
              time: 1529608856,
              coin: 'KMD',
              amount: 5,
              blocktime: 1529608856,
              blockhash:
                '0bd41a374d9a2a8989c039e3f2c760385f71f251d46834d68a9fc212ba594138',
              category: 'receive',
              confirmations: 202376,
              txid:
                '428594160533d8a68e46561ccffba08b63a2840997a361868309f39a340b77dd'
            },
            '9755a816fafb0d4590017f01704c29941d5c72db5ca5d31e81665c5b451a892a': {
              blockindex: 876040,
              time: 1528851861,
              coin: 'KMD',
              amount: -0.05339588,
              blocktime: 1528851861,
              blockhash:
                '0000000e1246a644500f603a34fda402f707e601c0deb5ef60bb27b1e290dc45',
              category: 'send',
              confirmations: 214802,
              txid:
                '9755a816fafb0d4590017f01704c29941d5c72db5ca5d31e81665c5b451a892a'
            },
            '78bb259267a6a48a22705b3ab6e27cb40ff92a149c102d53a43004545687d7f6': {
              blockindex: 889625,
              time: 1529678426,
              coin: 'KMD',
              amount: -0.00015292,
              blocktime: 1529678426,
              blockhash:
                '021c70bd3fdb55692161275c081df0421563c7d43a5758183bb7ada7d49c8003',
              category: 'send',
              confirmations: 201217,
              txid:
                '78bb259267a6a48a22705b3ab6e27cb40ff92a149c102d53a43004545687d7f6'
            },
            '620ef6d73d2e683082e056edda5db47ad2499a3c50c96f613edebc00dcebeb0e': {
              blockindex: 1031370,
              time: 1538254762,
              coin: 'KMD',
              amount: -0.18529518,
              blocktime: 1538254762,
              blockhash:
                '00000005cb7d71b11ac4872520cf7992d1a19680ed72ad3786ae20fea79ab653',
              category: 'send',
              confirmations: 59472,
              txid:
                '620ef6d73d2e683082e056edda5db47ad2499a3c50c96f613edebc00dcebeb0e'
            },
            aad5992c6a5c3c38836aabe76276f2e0b034eed6d55af6815c7f11822b530721: {
              blockindex: 1031265,
              time: 1538247367,
              coin: 'KMD',
              amount: -0.00059594,
              blocktime: 1538247367,
              blockhash:
                '0bb6451941f7de620aa203ced823b88c01847ccb36161f85a7e33eb19d05dc6a',
              category: 'send',
              confirmations: 59577,
              txid:
                'aad5992c6a5c3c38836aabe76276f2e0b034eed6d55af6815c7f11822b530721'
            },
            '81aa8e0b4a16310ccaf7549b4f96b4511a98576894a8fc801aa71566035b1b61': {
              blockindex: 1074378,
              time: 1540842527,
              coin: 'KMD',
              amount: 0.5046568,
              blocktime: 1540842527,
              blockhash:
                '0c110866c7aeef6f3fc29572d84d9818e9619b438ec7159fbc566f6aceb31f60',
              category: 'receive',
              confirmations: 16464,
              txid:
                '81aa8e0b4a16310ccaf7549b4f96b4511a98576894a8fc801aa71566035b1b61'
            },
            '58d9d265aa85cebc5ab7538efc940d9addb6c99edd8bd57da6f05203f8e07c26': {
              blockindex: 1031338,
              time: 1538252159,
              coin: 'KMD',
              amount: -0.46307295,
              blocktime: 1538252159,
              blockhash:
                '0a650f1149adc646b5e245d76b6b77ac841956cb8e8e2204a51c082810628166',
              category: 'send',
              confirmations: 59504,
              txid:
                '58d9d265aa85cebc5ab7538efc940d9addb6c99edd8bd57da6f05203f8e07c26'
            },
            '159258e303fe03fee8751aa6dbd239648186e31e902a1341ad806c4dfe1fccf3': {
              blockindex: 929439,
              time: 1532098421,
              coin: 'KMD',
              amount: -1.65893896,
              blocktime: 1532098421,
              blockhash:
                '07c20bc6bd81b468fc7cca7313beac02f96df9d0238acfa342cafe7ffb6d6e1e',
              category: 'send',
              confirmations: 161403,
              txid:
                '159258e303fe03fee8751aa6dbd239648186e31e902a1341ad806c4dfe1fccf3'
            },
            '6fdeafb99e36ec3f797d72f5176fd830d7f2af260f20585271aae48decc30444': {
              blockindex: 876038,
              time: 1528851687,
              coin: 'KMD',
              amount: -0.00006868,
              blocktime: 1528851687,
              blockhash:
                '0000001241950fc04096162397c9081fe8794c4ac1581ad679f20213b4cc30a4',
              category: 'send',
              confirmations: 214804,
              txid:
                '6fdeafb99e36ec3f797d72f5176fd830d7f2af260f20585271aae48decc30444'
            },
            b5fe9ad031ec1dee9795a2e1aaa3f4d993042a988334c929fd9d55187596f32d: {
              blockindex: 1033759,
              time: 1538397853,
              coin: 'KMD',
              amount: -0.00018399,
              blocktime: 1538397853,
              blockhash:
                '0e647c67dac615b3040a7c0983e67ff728c1eb3166b6580ec7cc58632b1e17bf',
              category: 'send',
              confirmations: 57083,
              txid:
                'b5fe9ad031ec1dee9795a2e1aaa3f4d993042a988334c929fd9d55187596f32d'
            },
            '87a87e32d0db0f9accf5d7e2f110992ef6f512c589f34c3a331e9cc4154a94bd': {
              blockindex: 847462,
              time: 1527097919,
              coin: 'KMD',
              amount: -0.04735574,
              blocktime: 1527097919,
              blockhash:
                '052ea5e70e7283e75a615336b04eae37d23f5c9f326c13ae9984db4eec0926c2',
              category: 'send',
              confirmations: 243380,
              txid:
                '87a87e32d0db0f9accf5d7e2f110992ef6f512c589f34c3a331e9cc4154a94bd'
            },
            '59471c5b2b5f2af768af16634ec8c06356132cc6a3aa13a5d6b7790e1201bf97': {
              blockindex: 1039749,
              time: 1538758292,
              coin: 'KMD',
              amount: -0.00008114,
              blocktime: 1538758292,
              blockhash:
                '0298d7660752bfc2ec7b9b9209c0ed31cc7e52dd1ebccd9b4ef876737a699316',
              category: 'send',
              confirmations: 51093,
              txid:
                '59471c5b2b5f2af768af16634ec8c06356132cc6a3aa13a5d6b7790e1201bf97'
            },
            '55591c94dc07fb2c58716216bb8c4de3ed604cf6b5fca09c70641b2535fc51cc': {
              blockindex: 847460,
              time: 1527097789,
              coin: 'KMD',
              amount: -0.00006092,
              blocktime: 1527097789,
              blockhash:
                '0e15d18456b5faff3712ebd22818adf6901048ebb1375b20212331f92ad839b7',
              category: 'send',
              confirmations: 243382,
              txid:
                '55591c94dc07fb2c58716216bb8c4de3ed604cf6b5fca09c70641b2535fc51cc'
            },
            d709c0c9f5742d6e335b433df128097921fdf10f1ed37d49c6fc628232580bcc: {
              blockindex: 1010499,
              time: 1536998064,
              coin: 'KMD',
              amount: -0.09270259,
              blocktime: 1536998064,
              blockhash:
                '0077afd0b440a69b0ada28a240e38a610cdaf30be6e55523299f05dad4d93d4c',
              category: 'send',
              confirmations: 80343,
              txid:
                'd709c0c9f5742d6e335b433df128097921fdf10f1ed37d49c6fc628232580bcc'
            },
            '8b629f28b510849ccb5441fdb387be16e13d5cf15018631154a58465ce23876b': {
              blockindex: 1074370,
              time: 1540841996,
              coin: 'KMD',
              amount: -0.5046668,
              blocktime: 1540841996,
              blockhash:
                '00000002c6edf4bb127af873c6d55c303862eae5cc9b6eb9d646ef1ed1c438d8',
              category: 'send',
              confirmations: 16472,
              txid:
                '8b629f28b510849ccb5441fdb387be16e13d5cf15018631154a58465ce23876b'
            },
            eaa4fc7adfa80e065df503c243b4953acca541a9418273b824b6a9fbbdba3e5e: {
              blockindex: 877609,
              time: 1528945648,
              coin: 'KMD',
              amount: -0.00001808,
              blocktime: 1528945648,
              blockhash:
                '0ae96612e498aa9201539e90df4accc64cf882b7f079c1437b355cbc03e2da87',
              category: 'send',
              confirmations: 213233,
              txid:
                'eaa4fc7adfa80e065df503c243b4953acca541a9418273b824b6a9fbbdba3e5e'
            },
            dfc449e7ce6f6e10028cf01fe63e72d2e99cdf51414995818b84bcb6852260e2: {
              blockindex: 1035043,
              time: 1538474786,
              coin: 'KMD',
              amount: -0.00011928,
              blocktime: 1538474786,
              blockhash:
                '0ce9f3b8af9e01d8ea1e459bf8d64e86708795b4e73e47f2ca3b8563eb603920',
              category: 'send',
              confirmations: 55799,
              txid:
                'dfc449e7ce6f6e10028cf01fe63e72d2e99cdf51414995818b84bcb6852260e2'
            },
            cd32c3a3d138b8224c6ab2e1a99783277ffe2e416cf347d12fdb03cf83df7129: {
              blockindex: 1031368,
              time: 1538254628,
              coin: 'KMD',
              amount: -0.00023844,
              blocktime: 1538254628,
              blockhash:
                '00000004c94581a446592a5ce850fe9056e9b461e358f0239d693124d48da6dc',
              category: 'send',
              confirmations: 59474,
              txid:
                'cd32c3a3d138b8224c6ab2e1a99783277ffe2e416cf347d12fdb03cf83df7129'
            },
            '616a8294194bee9b91ba00a047ddf12811c042e505d6306592bf01b4acca3bb6': {
              blockindex: 1033760,
              time: 1538397913,
              coin: 'KMD',
              amount: -0.1429877,
              blocktime: 1538397913,
              blockhash:
                '08b14cc574694cf47debd5d0b75a7669306d68144a70e524f8fa5241081730f7',
              category: 'send',
              confirmations: 57082,
              txid:
                '616a8294194bee9b91ba00a047ddf12811c042e505d6306592bf01b4acca3bb6'
            },
            f7a5e19eff9006b43e4e77950c376a15979aea9b55ef7a8bbd03249c139986c7: {
              blockindex: 1035458,
              time: 1538499757,
              coin: 'KMD',
              amount: -0.09270259,
              blocktime: 1538499757,
              blockhash:
                '014acd905c78b80ef9a17c006e277aaf13915687e59a7bbc407525f3a9a593d2',
              category: 'send',
              confirmations: 55384,
              txid:
                'f7a5e19eff9006b43e4e77950c376a15979aea9b55ef7a8bbd03249c139986c7'
            },
            '6daaf96dcbbd523465c52861291e323189e46787506e6dbb33e00f36c0fc7f92': {
              blockindex: 1033489,
              time: 1538381077,
              coin: 'KMD',
              amount: -0.00018399,
              blocktime: 1538381077,
              blockhash:
                '000000035e834686701acb83ec46ef4bf8355d784b6119b5c9d804e62219c89d',
              category: 'send',
              confirmations: 57353,
              txid:
                '6daaf96dcbbd523465c52861291e323189e46787506e6dbb33e00f36c0fc7f92'
            },
            '25d787631e7a2545ea912a9636f72ae0d1146dbe81ee3ab22612526efc7801d1': {
              blockindex: 1033577,
              time: 1538386285,
              coin: 'KMD',
              amount: -0.1429877,
              blocktime: 1538386285,
              blockhash:
                '078882dbe8c6f54f7901bb2a3526b63f16ebe29c74b97bed0796070f166ce4d8',
              category: 'send',
              confirmations: 57265,
              txid:
                '25d787631e7a2545ea912a9636f72ae0d1146dbe81ee3ab22612526efc7801d1'
            },
            '0f8edbef4c5ee93ad036a772c4716745ae1e7c9a0c33f93f4822f8e37c87330c': {
              blockindex: 1035158,
              time: 1538481619,
              coin: 'KMD',
              amount: -0.09270259,
              blocktime: 1538481619,
              blockhash:
                '0e0d893adeec812ba0985d9124841188bc8bc9a0bf0cd5cc8877148af85b2d6f',
              category: 'send',
              confirmations: 55684,
              txid:
                '0f8edbef4c5ee93ad036a772c4716745ae1e7c9a0c33f93f4822f8e37c87330c'
            },
            '3ae2854df80c23ec8bf039f347a79f604326dfd0b1bdecece6e14cab43369265': {
              blockindex: 1035414,
              time: 1538496976,
              coin: 'KMD',
              amount: 0.09269259,
              blocktime: 1538496976,
              blockhash:
                '0613247f9f2325cb02360485233c603a87cb368cfccc8b839b848a762b16e72e',
              category: 'receive',
              confirmations: 55428,
              txid:
                '3ae2854df80c23ec8bf039f347a79f604326dfd0b1bdecece6e14cab43369265'
            },
            '56068fe1bed4d8ac44c862c81152f96f24a22a2c6b7b442aca1f2542cf0c1622': {
              blockindex: 1033491,
              time: 1538381160,
              coin: 'KMD',
              amount: -0.1429877,
              blocktime: 1538381160,
              blockhash:
                '000000010bcaee2986d794bdf185f279b0fe9bb0b7362734b9579fa094064447',
              category: 'send',
              confirmations: 57351,
              txid:
                '56068fe1bed4d8ac44c862c81152f96f24a22a2c6b7b442aca1f2542cf0c1622'
            },
            aafa6b496c0cb6cddce81fa906b3a90a8240a9bb5685c923557d433f664a5e82: {
              blockindex: 1035419,
              time: 1538497318,
              coin: 'KMD',
              amount: -0.00011928,
              blocktime: 1538497318,
              blockhash:
                '090669ea74766ebd73ca022e8fa77b83610feafc5c6aec2a05b329ff2d9342ef',
              category: 'send',
              confirmations: 55423,
              txid:
                'aafa6b496c0cb6cddce81fa906b3a90a8240a9bb5685c923557d433f664a5e82'
            },
            '2f977550649f444f2a98c8ec11df7a815c51563a4674bdbda3ca90bf463569eb': {
              blockindex: 1035150,
              time: 1538481183,
              coin: 'KMD',
              amount: -0.00011928,
              blocktime: 1538481183,
              blockhash:
                '0df58801f2e1a465f44c16940f3b0fa7feab9bdaedf5f0c09eb1a444fa784dc0',
              category: 'send',
              confirmations: 55692,
              txid:
                '2f977550649f444f2a98c8ec11df7a815c51563a4674bdbda3ca90bf463569eb'
            },
            '211c8310831a7a73ffeaaae20e8543d0f772140df4dfc49d009214c822df0f54': {
              blockindex: 925437,
              time: 1531854797,
              coin: 'KMD',
              amount: -0.00079459,
              blocktime: 1531854797,
              blockhash:
                '09109cf9826f36f24a48ad72fee275a4734c11a74f305cd257b98a6065b396d7',
              category: 'send',
              confirmations: 165405,
              txid:
                '211c8310831a7a73ffeaaae20e8543d0f772140df4dfc49d009214c822df0f54'
            },
            bc2f2dcd4548adf38c1c709fe9b7131f9731925cfca0cb1aab7369b19fcd0d8d: {
              blockindex: 1039739,
              time: 1538757672,
              coin: 'KMD',
              amount: -0.00011928,
              blocktime: 1538757672,
              blockhash:
                '09bde85e1c7e8f89e4b5d0fd36d2745f77e3182a849eb962319c684c61aa2c01',
              category: 'send',
              confirmations: 51103,
              txid:
                'bc2f2dcd4548adf38c1c709fe9b7131f9731925cfca0cb1aab7369b19fcd0d8d'
            },
            '39b9fcfd66eca5651bbc09f5eb1d26789a9620a6d3d734b7c176f96954e0b537': {
              blockindex: 1031269,
              time: 1538247532,
              coin: 'KMD',
              amount: -0.46307295,
              blocktime: 1538247532,
              blockhash:
                '00000002bf7e073e072e5fc89d7fb0ab05d99a10b3b141f9d77fafa61510bb07',
              category: 'send',
              confirmations: 59573,
              txid:
                '39b9fcfd66eca5651bbc09f5eb1d26789a9620a6d3d734b7c176f96954e0b537'
            },
            '5f4cd2b1aef137dbd409e431f401ec7fc7c25020f76f38d87d83db53a1b3b1bf': {
              blockindex: 1003705,
              time: 1536589344,
              coin: 'KMD',
              amount: -0.00001298,
              blocktime: 1536589344,
              blockhash:
                '00000000d511e39835a9bafe52b6c496bf3f2d1cb11f027b5e12411ea6c218f6',
              category: 'send',
              confirmations: 87137,
              txid:
                '5f4cd2b1aef137dbd409e431f401ec7fc7c25020f76f38d87d83db53a1b3b1bf'
            },
            e15178455a12f15a1bb4b9de700536a17773c991dd44424619c35c15d29eabb7: {
              blockindex: 1039743,
              time: 1538757875,
              coin: 'KMD',
              amount: -0.09270259,
              blocktime: 1538757875,
              blockhash:
                '01f8e231affb333ee75ef59445258e48d69a810379bc8ac5669a846fe064d646',
              category: 'send',
              confirmations: 51099,
              txid:
                'e15178455a12f15a1bb4b9de700536a17773c991dd44424619c35c15d29eabb7'
            },
            e346d37464425f6a99ac1171449f2315496d50af63d8d00fe9e0ee76a465508d: {
              blockindex: 1033573,
              time: 1538386064,
              coin: 'KMD',
              amount: -0.00018399,
              blocktime: 1538386064,
              blockhash:
                '00000002dbd0e31b8835c3c3100ea764e07f5d0eb6412e83efd343680e6a253e',
              category: 'send',
              confirmations: 57269,
              txid:
                'e346d37464425f6a99ac1171449f2315496d50af63d8d00fe9e0ee76a465508d'
            }
          }
        },
        COQUI: {
          list: [
            'f0a6595b2adb23c914b010c213dd5c356951672b15cf21034a222c2ca9c35e93',
            'fe5f9a0a639a9a975953eed268ba1615f2d821ce9cf02361d46ed5e0b75ccc83',
            'c582a83cb927c9ec2158a48e50cade7bd869ff446a00963c6862b707c96f149a',
            '0994bf0bdf55a7750a77f78043f4369e94be49979dbc025365751554eb06f6d1',
            '529bc62d980758fb47699e57c7df41b54ec45f954db910140f81b417452fa7f1',
            '5193b541dd7880608a087941878b7d069beb6ac709a2bef27afd2e5ef4acb9cc',
            'd6fa9acfddd2c619eb0d259a5480b0b743c0e9db781a2a29b09073a5e3ebadae',
            'f900964f5bdd550799fe10348a98b0d8e272fc1db07a37d51054f9801b4e72d0',
            '4ef136616316cef701beb1b47dcc657fc6b37c406cd7f5ba816bd829682f7b8d',
            '8466c57584d25fb85befe3dface5475bf734abbf4f6c38be4e17e7a5394e0092',
            '428926bc5d432a11ce94e3a840429035422972b5d68551d976e649cb53104e8f',
            '215b8dd6e9b67c9fd735419437bba9e68106cc8b89c63bd8b89adba3ed38ddc3',
            '7d73a34134f1306c05f86c5e0e60b52f469c74c0433d28edc83c5811c4ced2a6',
            '5f6805469121f401a0db7a909fda78390c6a6509c8bf44869e3d89d1cbc41e19',
            '3a6dff686c2c55f7f09676108f012474704e7fb0e991dd2d1ec85af15e16402e',
            'b90fea5644f756cb565cee29be0fafea293079a36fd25c9cae738d219d4d1cac',
            'e3f21829bdd70b15544d44498dab2cac46aa902fb74da2d4de9b74e6d26276c7',
            '81e8bfc8e743e280c8dee09f64135a55816225f178177aa0a8cb16789ebaeb42',
            'ec0e069ff8a03e6d5bb7e949fb814e05dd4ed5420feafd6bed6b9edd9f019194',
            '548b372eaa79ec2119735047d0738ed138dfe20c6482b465179e759fb4dcb88d',
            '49b448c08014e207ab91fbe7e1cc82139b84adb8c96d3b7f4f7767b2d1d6fe94',
            '6100066e68fc9a4f3b6045a4b20c14a014f3e5334d17189887c38b7500eedf97',
            '80e49ba2913010929e6e71c5dfb6d1cba9ab5eb1ed2b8c2e123beafd15e7a1f4',
            '60bb2d1b370bfa88f0109645378574a851c2bda6942b2dbb88f7caa0196a053b',
            '3ae9e098484fce628a9eab82cb5ee4714c0198d850c5eae8015761b16b188443',
            'b3f6742a6efabf305099294d9983c0d166f87eafd16812c7e78dc5c9ca76425f',
            '73c2eabb1466e83717f45f5d13fb211b6ab53e60d32b166ebce0dbeb45237bc7',
            '68329d5dc0767cd17341d5a8783f34033b8a401d97bf211ca2014deca9d4983f',
            '6608f519d90d60c7113477b07454f48422013f4676cd9de222dbb110e08d24c6',
            'c6c6c032187a41b7279e9e1ad19470f01260988212c467c01c99866ba872ed2b',
            'f105b4561dfeb24c05977f64c83ac60ffeb863938f100257779e89d25aa92f96',
            'a8bb0bb18eb269e8e386c539be7e25486c38a27170bca71ad0308929d525af98',
            '4285ba0d15f227430914f0f2441f4d89b14cd1155c1a1c999300e42014e276a3',
            '61cbe04c1f12591a67440957028b3d56f67929aabd3d3e0678239719b10d894e',
            '31ca9fe2921fefc1c9168126b0cba677bd1b402648d98cfe70ed48cc375f7591',
            'ea4671d06a3c75e198dd2434d2acc44633f285112ed90530a7ba55528e931401',
            '04c48e3bb4ccaa568be3cb4f5b657ce77065183ed87f7a45a1238e189df9a6ba',
            '98daca3a90b53f9e0089b94caf1941eef7ff0aa7d7c3ce18726a1556e7505518',
            '6e45e1a37a71d12675238fd2c949d6d5cbb713ca09af941c20c418f108b9cd77',
            '5d62bf648d3c1398442fa7fe8adaaac4de911609c44bb13dc10ec14db2d8e078',
            '55c767b0297b3a6c0429c92cefd6cc2f82b4bbe3c044273ac475062c5e915d15',
            'e880a15f5390db3797fe82ceaafea7653dd25dc2333f37eb031e8bf14b46bc4b',
            '4b398cc3010f1717d04f2e98383d8a1e9351ce5f7f66ca179c18cdc021e237ae',
            '2b37dbb0c9cf0273c1bb2642fc810e59a43bfb422b0b63a0b4b9750bd65e6619',
            '3a1bf6c0cb0f4a0906e74cdb0f93b3fbe09120ab116f0e9fb07ee8d7705730c9',
            '240145c6ef9f1cc2c05a45fae11119a973cebf0651468190f5c10e203207bc90',
            '2b84d09bed3acbd0cfc29581bdc78b6532d111d36e6e61c9baf813d89fe622a2',
            '98a92d556eb5b5d4ca95bc49af218f9750f77fb5b8505e720f3a7784264f2ebe',
            '6d4b925759fec75c6e9d5ef77320c89993e23c564ca8b743d307f7ee6f72ee69',
            '8dbdbfba664dae6df70a4b8a927d8c5b04893cba7a62011bccfdfbf87b2d731e'
          ],
          entities: {
            '7d73a34134f1306c05f86c5e0e60b52f469c74c0433d28edc83c5811c4ced2a6': {
              blockindex: 237219,
              time: 1539376291,
              coin: 'COQUI',
              amount: 4.565392,
              blocktime: 1539376291,
              blockhash:
                '01f050648a38757e38a14498683ca9ca163e631700994970100a2f61672b6bc8',
              category: 'receive',
              confirmations: 2926,
              txid:
                '7d73a34134f1306c05f86c5e0e60b52f469c74c0433d28edc83c5811c4ced2a6'
            },
            '5d62bf648d3c1398442fa7fe8adaaac4de911609c44bb13dc10ec14db2d8e078': {
              blockindex: 231355,
              time: 1539024600,
              coin: 'COQUI',
              amount: 4.59422396,
              blocktime: 1539024600,
              blockhash:
                '041486dd8628bbd28e8493833835b7d1a490836cf999a1e75a6fae0c821b6321',
              category: 'receive',
              confirmations: 8790,
              txid:
                '5d62bf648d3c1398442fa7fe8adaaac4de911609c44bb13dc10ec14db2d8e078'
            },
            ec0e069ff8a03e6d5bb7e949fb814e05dd4ed5420feafd6bed6b9edd9f019194: {
              blockindex: 237155,
              time: 1539372835,
              coin: 'COQUI',
              amount: 4.45018892,
              blocktime: 1539372835,
              blockhash:
                '0206bb93eb8358f3c10f0438bae167903871f95e67ed083e22ee7ec9a93e1f6c',
              category: 'receive',
              confirmations: 2990,
              txid:
                'ec0e069ff8a03e6d5bb7e949fb814e05dd4ed5420feafd6bed6b9edd9f019194'
            },
            '49b448c08014e207ab91fbe7e1cc82139b84adb8c96d3b7f4f7767b2d1d6fe94': {
              blockindex: 237131,
              time: 1539371445,
              coin: 'COQUI',
              amount: 4.57976261,
              blocktime: 1539371445,
              blockhash:
                '03f31cb3c0456bf83042b04a43bba9c2943b6844fb49ac10247170733cd6de2e',
              category: 'receive',
              confirmations: 3014,
              txid:
                '49b448c08014e207ab91fbe7e1cc82139b84adb8c96d3b7f4f7767b2d1d6fe94'
            },
            '3ae9e098484fce628a9eab82cb5ee4714c0198d850c5eae8015761b16b188443': {
              blockindex: 236800,
              time: 1539350508,
              coin: 'COQUI',
              amount: 17.99281763,
              blocktime: 1539350508,
              blockhash:
                '02a060c5c15f91146df47b3d58ba09e1d91dec71f87d5fd6df75440dd3735cc9',
              category: 'receive',
              confirmations: 3345,
              txid:
                '3ae9e098484fce628a9eab82cb5ee4714c0198d850c5eae8015761b16b188443'
            },
            d6fa9acfddd2c619eb0d259a5480b0b743c0e9db781a2a29b09073a5e3ebadae: {
              blockindex: 238329,
              time: 1539791996,
              coin: 'COQUI',
              amount: 2.16884703,
              blocktime: 1539791996,
              blockhash:
                '048f77b3936fe029e2589f1860e45145d738ec88c0105d93d75a1ca8741c5881',
              category: 'receive',
              confirmations: 1816,
              txid:
                'd6fa9acfddd2c619eb0d259a5480b0b743c0e9db781a2a29b09073a5e3ebadae'
            },
            '2b37dbb0c9cf0273c1bb2642fc810e59a43bfb422b0b63a0b4b9750bd65e6619': {
              blockindex: 224243,
              time: 1538595828,
              coin: 'COQUI',
              amount: 7.75212001,
              blocktime: 1538595828,
              blockhash:
                '03e747fa909bc31be74f2395b2035271688d52ed39ba4264bf72e3e9a24589af',
              category: 'receive',
              confirmations: 15902,
              txid:
                '2b37dbb0c9cf0273c1bb2642fc810e59a43bfb422b0b63a0b4b9750bd65e6619'
            },
            '548b372eaa79ec2119735047d0738ed138dfe20c6482b465179e759fb4dcb88d': {
              blockindex: 237134,
              time: 1539371500,
              coin: 'COQUI',
              amount: 8.95496054,
              blocktime: 1539371500,
              blockhash:
                '013ae2c781ce9e27f705fd9d1d68ace3b17dfe72670a16f3b35f6d8ba4f5e282',
              category: 'receive',
              confirmations: 3011,
              txid:
                '548b372eaa79ec2119735047d0738ed138dfe20c6482b465179e759fb4dcb88d'
            },
            '55c767b0297b3a6c0429c92cefd6cc2f82b4bbe3c044273ac475062c5e915d15': {
              blockindex: 228480,
              time: 1538850475,
              coin: 'COQUI',
              amount: 8.68096961,
              blocktime: 1538850475,
              blockhash:
                '02686c16289112011d29c7d7e4f39ffd42f7f84024cba200cffda8971f360064',
              category: 'receive',
              confirmations: 11665,
              txid:
                '55c767b0297b3a6c0429c92cefd6cc2f82b4bbe3c044273ac475062c5e915d15'
            },
            c582a83cb927c9ec2158a48e50cade7bd869ff446a00963c6862b707c96f149a: {
              blockindex: 238434,
              time: 1539811780,
              coin: 'COQUI',
              amount: 1.59445711,
              blocktime: 1539811780,
              blockhash:
                '0a3b9ce60f8a7ea07a0c18a6ae5f5e52684316aa6fe2ce479a19d06611b456ec',
              category: 'receive',
              confirmations: 1711,
              txid:
                'c582a83cb927c9ec2158a48e50cade7bd869ff446a00963c6862b707c96f149a'
            },
            '4b398cc3010f1717d04f2e98383d8a1e9351ce5f7f66ca179c18cdc021e237ae': {
              blockindex: 228441,
              time: 1538848282,
              coin: 'COQUI',
              amount: 8.83931433,
              blocktime: 1538848282,
              blockhash:
                '0415ca91e9d210a99ef0b864b6b8d048d1cee1fe99be982327cbbe0a18582397',
              category: 'receive',
              confirmations: 11704,
              txid:
                '4b398cc3010f1717d04f2e98383d8a1e9351ce5f7f66ca179c18cdc021e237ae'
            },
            '98daca3a90b53f9e0089b94caf1941eef7ff0aa7d7c3ce18726a1556e7505518': {
              blockindex: 232904,
              time: 1539117147,
              coin: 'COQUI',
              amount: 4.4030528,
              blocktime: 1539117147,
              blockhash:
                '01b71c2d63c77c0d4b2247a1ff23ab704a87207a13d4b816240ef50fdf6185c9',
              category: 'receive',
              confirmations: 7241,
              txid:
                '98daca3a90b53f9e0089b94caf1941eef7ff0aa7d7c3ce18726a1556e7505518'
            },
            '5193b541dd7880608a087941878b7d069beb6ac709a2bef27afd2e5ef4acb9cc': {
              blockindex: 238365,
              time: 1539798561,
              coin: 'COQUI',
              amount: 8.98955224,
              blocktime: 1539798561,
              blockhash:
                '0336a24393b4dae9f7a6736d52fbb4699dc25e034afcb2831da9e48b6f9b4c22',
              category: 'receive',
              confirmations: 1780,
              txid:
                '5193b541dd7880608a087941878b7d069beb6ac709a2bef27afd2e5ef4acb9cc'
            },
            '215b8dd6e9b67c9fd735419437bba9e68106cc8b89c63bd8b89adba3ed38ddc3': {
              blockindex: 237223,
              time: 1539376438,
              coin: 'COQUI',
              amount: 19.68518188,
              blocktime: 1539376438,
              blockhash:
                '01fa2f6f53aae4d5046cab3715754e148128aef80c54a5f1b28e49a4d2d50758',
              category: 'receive',
              confirmations: 2922,
              txid:
                '215b8dd6e9b67c9fd735419437bba9e68106cc8b89c63bd8b89adba3ed38ddc3'
            },
            '8466c57584d25fb85befe3dface5475bf734abbf4f6c38be4e17e7a5394e0092': {
              blockindex: 237285,
              time: 1539380341,
              coin: 'COQUI',
              amount: 2.24579675,
              blocktime: 1539380341,
              blockhash:
                '0205b4aee1630b44393aea0f464d5ff1ef4f4897a192f6c1fb33af129b61783e',
              category: 'receive',
              confirmations: 2860,
              txid:
                '8466c57584d25fb85befe3dface5475bf734abbf4f6c38be4e17e7a5394e0092'
            },
            '73c2eabb1466e83717f45f5d13fb211b6ab53e60d32b166ebce0dbeb45237bc7': {
              blockindex: 236794,
              time: 1539350341,
              coin: 'COQUI',
              amount: 8.70051639,
              blocktime: 1539350341,
              blockhash:
                '01b61971fd5fc46abf30b43496668c818ca670c89e23106b2ba97e0340d7fbe9',
              category: 'receive',
              confirmations: 3351,
              txid:
                '73c2eabb1466e83717f45f5d13fb211b6ab53e60d32b166ebce0dbeb45237bc7'
            },
            '3a6dff686c2c55f7f09676108f012474704e7fb0e991dd2d1ec85af15e16402e': {
              blockindex: 237194,
              time: 1539375275,
              coin: 'COQUI',
              amount: 9.84266215,
              blocktime: 1539375275,
              blockhash:
                '01b4e68953ce5713d003bc6667c8870bccea4b0120600be94117ad1fd05f2637',
              category: 'receive',
              confirmations: 2951,
              txid:
                '3a6dff686c2c55f7f09676108f012474704e7fb0e991dd2d1ec85af15e16402e'
            },
            '61cbe04c1f12591a67440957028b3d56f67929aabd3d3e0678239719b10d894e': {
              blockindex: 235668,
              time: 1539283812,
              coin: 'COQUI',
              amount: 9.01741862,
              blocktime: 1539283812,
              blockhash:
                '00079ab39922959a8bb0145c95201bb8edd39f3bc68d97379fbc9a81f1e3f48b',
              category: 'receive',
              confirmations: 4477,
              txid:
                '61cbe04c1f12591a67440957028b3d56f67929aabd3d3e0678239719b10d894e'
            },
            '31ca9fe2921fefc1c9168126b0cba677bd1b402648d98cfe70ed48cc375f7591': {
              blockindex: 235555,
              time: 1539277020,
              coin: 'COQUI',
              amount: 8.82590498,
              blocktime: 1539277020,
              blockhash:
                '04aedca7f5c4549264864ab0fd8ef06cada846e379e664a4c333238194134687',
              category: 'receive',
              confirmations: 4590,
              txid:
                '31ca9fe2921fefc1c9168126b0cba677bd1b402648d98cfe70ed48cc375f7591'
            },
            '240145c6ef9f1cc2c05a45fae11119a973cebf0651468190f5c10e203207bc90': {
              blockindex: 215268,
              time: 1538054034,
              coin: 'COQUI',
              amount: 8.89336171,
              blocktime: 1538054034,
              blockhash:
                '01df952e100ec6efba53781e8dda904a5e953304958d260cb36770d50a438417',
              category: 'receive',
              confirmations: 24877,
              txid:
                '240145c6ef9f1cc2c05a45fae11119a973cebf0651468190f5c10e203207bc90'
            },
            '6e45e1a37a71d12675238fd2c949d6d5cbb713ca09af941c20c418f108b9cd77': {
              blockindex: 232882,
              time: 1539115944,
              coin: 'COQUI',
              amount: 4.59060007,
              blocktime: 1539115944,
              blockhash:
                '05505010eb54f3f6ab6dde6485228bdae15f22cba430c9b6a981b411400c9b52',
              category: 'receive',
              confirmations: 7263,
              txid:
                '6e45e1a37a71d12675238fd2c949d6d5cbb713ca09af941c20c418f108b9cd77'
            },
            e880a15f5390db3797fe82ceaafea7653dd25dc2333f37eb031e8bf14b46bc4b: {
              blockindex: 228462,
              time: 1538849867,
              coin: 'COQUI',
              amount: 9.0314167,
              blocktime: 1538849867,
              blockhash:
                '04ca28e3ea71c5afd39c3d1af33ffd28def6841919f27dbd52131ca45418925e',
              category: 'receive',
              confirmations: 11683,
              txid:
                'e880a15f5390db3797fe82ceaafea7653dd25dc2333f37eb031e8bf14b46bc4b'
            },
            '3a1bf6c0cb0f4a0906e74cdb0f93b3fbe09120ab116f0e9fb07ee8d7705730c9': {
              blockindex: 224234,
              time: 1538595574,
              coin: 'COQUI',
              amount: 9.87375195,
              blocktime: 1538595574,
              blockhash:
                '04d782534c64fed975ff33455aab792510d59f837e843e4a8e5174e84e398456',
              category: 'receive',
              confirmations: 15911,
              txid:
                '3a1bf6c0cb0f4a0906e74cdb0f93b3fbe09120ab116f0e9fb07ee8d7705730c9'
            },
            '04c48e3bb4ccaa568be3cb4f5b657ce77065183ed87f7a45a1238e189df9a6ba': {
              blockindex: 232915,
              time: 1539118095,
              coin: 'COQUI',
              amount: 4.55111132,
              blocktime: 1539118095,
              blockhash:
                '049a40c53e31949d7acdf20e9ef84cb4f878f6ac440eba410fb36540876375d2',
              category: 'receive',
              confirmations: 7230,
              txid:
                '04c48e3bb4ccaa568be3cb4f5b657ce77065183ed87f7a45a1238e189df9a6ba'
            },
            '6d4b925759fec75c6e9d5ef77320c89993e23c564ca8b743d307f7ee6f72ee69': {
              blockindex: 215233,
              time: 1538052682,
              coin: 'COQUI',
              amount: 4.49487092,
              blocktime: 1538052682,
              blockhash:
                '02805683365fd35028859add53e51edccc0b246806957747d61945b31bad7081',
              category: 'receive',
              confirmations: 24912,
              txid:
                '6d4b925759fec75c6e9d5ef77320c89993e23c564ca8b743d307f7ee6f72ee69'
            },
            a8bb0bb18eb269e8e386c539be7e25486c38a27170bca71ad0308929d525af98: {
              blockindex: 235700,
              time: 1539285897,
              coin: 'COQUI',
              amount: 9.15938279,
              blocktime: 1539285897,
              blockhash:
                '001585d97b7e30d2e8b4b01876aa6fd57c65fbc11adcc9c929d1b7fdf904845b',
              category: 'receive',
              confirmations: 4445,
              txid:
                'a8bb0bb18eb269e8e386c539be7e25486c38a27170bca71ad0308929d525af98'
            },
            '68329d5dc0767cd17341d5a8783f34033b8a401d97bf211ca2014deca9d4983f': {
              blockindex: 236787,
              time: 1539350039,
              coin: 'COQUI',
              amount: 8.86625566,
              blocktime: 1539350039,
              blockhash:
                '03ca37b9a4494d1681ebd2743ae5c6cef283244579e38986342052557e4fd681',
              category: 'receive',
              confirmations: 3358,
              txid:
                '68329d5dc0767cd17341d5a8783f34033b8a401d97bf211ca2014deca9d4983f'
            },
            '6100066e68fc9a4f3b6045a4b20c14a014f3e5334d17189887c38b7500eedf97': {
              blockindex: 236896,
              time: 1539357182,
              coin: 'COQUI',
              amount: 9.06660277,
              blocktime: 1539357182,
              blockhash:
                '0049ef4ae4d6aaae07c7fcbddc795a248b7c266cca9bb8b6b78981e5b35b5f38',
              category: 'receive',
              confirmations: 3249,
              txid:
                '6100066e68fc9a4f3b6045a4b20c14a014f3e5334d17189887c38b7500eedf97'
            },
            '60bb2d1b370bfa88f0109645378574a851c2bda6942b2dbb88f7caa0196a053b': {
              blockindex: 236803,
              time: 1539350538,
              coin: 'COQUI',
              amount: 4.57256601,
              blocktime: 1539350538,
              blockhash:
                '01c80b707bf8a050b87f8a3cde0ac60b5408e1f9eeaecee6a3cbca81d6e450f1',
              category: 'receive',
              confirmations: 3342,
              txid:
                '60bb2d1b370bfa88f0109645378574a851c2bda6942b2dbb88f7caa0196a053b'
            },
            e3f21829bdd70b15544d44498dab2cac46aa902fb74da2d4de9b74e6d26276c7: {
              blockindex: 237159,
              time: 1539372908,
              coin: 'COQUI',
              amount: 1.94814065,
              blocktime: 1539372908,
              blockhash:
                '030f182784d59c679fec6b9c8e932f0fb7f86f6af01b1c6d7fb32633f93a76a8',
              category: 'receive',
              confirmations: 2986,
              txid:
                'e3f21829bdd70b15544d44498dab2cac46aa902fb74da2d4de9b74e6d26276c7'
            },
            '8dbdbfba664dae6df70a4b8a927d8c5b04893cba7a62011bccfdfbf87b2d731e': {
              blockindex: 214957,
              time: 1538036934,
              coin: 'COQUI',
              amount: 4.5333856,
              blocktime: 1538036934,
              blockhash:
                '07ae0f5cb5a236818bc4dc517efa7a85e5d428d753f39a2549ce7f9925648d6e',
              category: 'receive',
              confirmations: 25188,
              txid:
                '8dbdbfba664dae6df70a4b8a927d8c5b04893cba7a62011bccfdfbf87b2d731e'
            },
            '6608f519d90d60c7113477b07454f48422013f4676cd9de222dbb110e08d24c6': {
              blockindex: 236783,
              time: 1539349978,
              coin: 'COQUI',
              amount: 8.62314295,
              blocktime: 1539349978,
              blockhash:
                '01a3e99063867387f0ce76f504246af1263a8d4a3a0f597653b1f4ef14207f30',
              category: 'receive',
              confirmations: 3362,
              txid:
                '6608f519d90d60c7113477b07454f48422013f4676cd9de222dbb110e08d24c6'
            },
            '4285ba0d15f227430914f0f2441f4d89b14cd1155c1a1c999300e42014e276a3': {
              blockindex: 235684,
              time: 1539284684,
              coin: 'COQUI',
              amount: 8.96185756,
              blocktime: 1539284684,
              blockhash:
                '0025113c6fd8cdc68f4f5e0ff8090052d8437e50a54bbef6a3cebc314b65b89d',
              category: 'receive',
              confirmations: 4461,
              txid:
                '4285ba0d15f227430914f0f2441f4d89b14cd1155c1a1c999300e42014e276a3'
            },
            b90fea5644f756cb565cee29be0fafea293079a36fd25c9cae738d219d4d1cac: {
              blockindex: 237166,
              time: 1539373219,
              coin: 'COQUI',
              amount: 8.83260457,
              blocktime: 1539373219,
              blockhash:
                '0353c63f3dd1feabbe343d8d8c827047aa06d959289bf16c9f969fe3bc5306ac',
              category: 'receive',
              confirmations: 2979,
              txid:
                'b90fea5644f756cb565cee29be0fafea293079a36fd25c9cae738d219d4d1cac'
            },
            '0994bf0bdf55a7750a77f78043f4369e94be49979dbc025365751554eb06f6d1': {
              blockindex: 238386,
              time: 1539800682,
              coin: 'COQUI',
              amount: 9.12347433,
              blocktime: 1539800682,
              blockhash:
                '0e24ae3fbcff4bcb7a495ea3394e0eba4a6a10fe1b5426163b20139290f02a3d',
              category: 'receive',
              confirmations: 1759,
              txid:
                '0994bf0bdf55a7750a77f78043f4369e94be49979dbc025365751554eb06f6d1'
            },
            '5f6805469121f401a0db7a909fda78390c6a6509c8bf44869e3d89d1cbc41e19': {
              blockindex: 237209,
              time: 1539375789,
              coin: 'COQUI',
              amount: 9.23205442,
              blocktime: 1539375789,
              blockhash:
                '022194a76858e9e2ebd0826ba90679819fcc36beeeabf1be3909afa1d6404e30',
              category: 'receive',
              confirmations: 2936,
              txid:
                '5f6805469121f401a0db7a909fda78390c6a6509c8bf44869e3d89d1cbc41e19'
            },
            '98a92d556eb5b5d4ca95bc49af218f9750f77fb5b8505e720f3a7784264f2ebe': {
              blockindex: 215255,
              time: 1538053336,
              coin: 'COQUI',
              amount: 8.99650268,
              blocktime: 1538053336,
              blockhash:
                '04e94cd319044651e2744ffe3a5e4c2d327df0909e6f52d27e356f11f01c5bb0',
              category: 'receive',
              confirmations: 24890,
              txid:
                '98a92d556eb5b5d4ca95bc49af218f9750f77fb5b8505e720f3a7784264f2ebe'
            },
            f900964f5bdd550799fe10348a98b0d8e272fc1db07a37d51054f9801b4e72d0: {
              blockindex: 238306,
              time: 1539787932,
              coin: 'COQUI',
              amount: 2.2049802,
              blocktime: 1539787932,
              blockhash:
                '088ac51970cde09e194181156e6470bb811f2abcb31b7d19f755bcccc6e3919e',
              category: 'receive',
              confirmations: 1839,
              txid:
                'f900964f5bdd550799fe10348a98b0d8e272fc1db07a37d51054f9801b4e72d0'
            },
            '4ef136616316cef701beb1b47dcc657fc6b37c406cd7f5ba816bd829682f7b8d': {
              blockindex: 238279,
              time: 1539781100,
              coin: 'COQUI',
              amount: 8.71354716,
              blocktime: 1539781100,
              blockhash:
                '03ea5c4aff0026d879523f9ad775021a4a9c3874c74c725332e40a5cc7e8616c',
              category: 'receive',
              confirmations: 1866,
              txid:
                '4ef136616316cef701beb1b47dcc657fc6b37c406cd7f5ba816bd829682f7b8d'
            },
            fe5f9a0a639a9a975953eed268ba1615f2d821ce9cf02361d46ed5e0b75ccc83: {
              blockindex: 238446,
              time: 1539813132,
              coin: 'COQUI',
              amount: 1.32265513,
              blocktime: 1539813132,
              blockhash:
                '07f77259574f5dd52d362f72668e149f2e4d7daa68e28a87b9dca9870d06c096',
              category: 'receive',
              confirmations: 1699,
              txid:
                'fe5f9a0a639a9a975953eed268ba1615f2d821ce9cf02361d46ed5e0b75ccc83'
            },
            '428926bc5d432a11ce94e3a840429035422972b5d68551d976e649cb53104e8f': {
              blockindex: 237266,
              time: 1539379091,
              coin: 'COQUI',
              amount: 8.83260457,
              blocktime: 1539379091,
              blockhash:
                '0179e34d02fdc1b893cb15324294caece9e66cabb156407f85cefdfcaf1dc914',
              category: 'receive',
              confirmations: 2879,
              txid:
                '428926bc5d432a11ce94e3a840429035422972b5d68551d976e649cb53104e8f'
            },
            b3f6742a6efabf305099294d9983c0d166f87eafd16812c7e78dc5c9ca76425f: {
              blockindex: 236799,
              time: 1539350467,
              coin: 'COQUI',
              amount: 4.32774556,
              blocktime: 1539350467,
              blockhash:
                '00881c4170824a51500f68d7230928772e169076c42e17fc9dc22e7f5f3c5e0e',
              category: 'receive',
              confirmations: 3346,
              txid:
                'b3f6742a6efabf305099294d9983c0d166f87eafd16812c7e78dc5c9ca76425f'
            },
            '81e8bfc8e743e280c8dee09f64135a55816225f178177aa0a8cb16789ebaeb42': {
              blockindex: 237157,
              time: 1539372882,
              coin: 'COQUI',
              amount: 4.55111132,
              blocktime: 1539372882,
              blockhash:
                '0423bf5d3c58b8f87721686098a217464a6b30ce449d0351e0a0e454639d7837',
              category: 'receive',
              confirmations: 2988,
              txid:
                '81e8bfc8e743e280c8dee09f64135a55816225f178177aa0a8cb16789ebaeb42'
            },
            '80e49ba2913010929e6e71c5dfb6d1cba9ab5eb1ed2b8c2e123beafd15e7a1f4': {
              blockindex: 236894,
              time: 1539357128,
              coin: 'COQUI',
              amount: 2.20164569,
              blocktime: 1539357128,
              blockhash:
                '025e6456310ed0e874786374ff0582887719ea1d574b406b9d4599d843f8468b',
              category: 'receive',
              confirmations: 3251,
              txid:
                '80e49ba2913010929e6e71c5dfb6d1cba9ab5eb1ed2b8c2e123beafd15e7a1f4'
            },
            f105b4561dfeb24c05977f64c83ac60ffeb863938f100257779e89d25aa92f96: {
              blockindex: 235729,
              time: 1539287711,
              coin: 'COQUI',
              amount: 4.57256601,
              blocktime: 1539287711,
              blockhash:
                '05220758fce6b1ab5017644a7d42d1ce6484f31ad5aa8e84b9b609d19b50e704',
              category: 'receive',
              confirmations: 4416,
              txid:
                'f105b4561dfeb24c05977f64c83ac60ffeb863938f100257779e89d25aa92f96'
            },
            ea4671d06a3c75e198dd2434d2acc44633f285112ed90530a7ba55528e931401: {
              blockindex: 235543,
              time: 1539276534,
              coin: 'COQUI',
              amount: 8.79920794,
              blocktime: 1539276534,
              blockhash:
                '024654b15b33912069eda19a2a6d325bdfd821df7100e58feec05b1c7df36bb2',
              category: 'receive',
              confirmations: 4602,
              txid:
                'ea4671d06a3c75e198dd2434d2acc44633f285112ed90530a7ba55528e931401'
            },
            c6c6c032187a41b7279e9e1ad19470f01260988212c467c01c99866ba872ed2b: {
              blockindex: 236783,
              time: 1539349978,
              coin: 'COQUI',
              amount: 4.37985722,
              blocktime: 1539349978,
              blockhash:
                '01a3e99063867387f0ce76f504246af1263a8d4a3a0f597653b1f4ef14207f30',
              category: 'receive',
              confirmations: 3362,
              txid:
                'c6c6c032187a41b7279e9e1ad19470f01260988212c467c01c99866ba872ed2b'
            },
            '529bc62d980758fb47699e57c7df41b54ec45f954db910140f81b417452fa7f1': {
              blockindex: 238373,
              time: 1539799566,
              coin: 'COQUI',
              amount: 4.41306915,
              blocktime: 1539799566,
              blockhash:
                '0787fb00af33ee701675de797555d9b051c73e55e9898ea09845856a6809fee9',
              category: 'receive',
              confirmations: 1772,
              txid:
                '529bc62d980758fb47699e57c7df41b54ec45f954db910140f81b417452fa7f1'
            },
            f0a6595b2adb23c914b010c213dd5c356951672b15cf21034a222c2ca9c35e93: {
              blockindex: 238591,
              time: 1539866592,
              coin: 'COQUI',
              amount: 0.75989978,
              blocktime: 1539866592,
              blockhash:
                '066ddde9b10a3cb065390731aed5a1f1603359355b8325e03462333fc597a617',
              category: 'receive',
              confirmations: 1554,
              txid:
                'f0a6595b2adb23c914b010c213dd5c356951672b15cf21034a222c2ca9c35e93'
            },
            '2b84d09bed3acbd0cfc29581bdc78b6532d111d36e6e61c9baf813d89fe622a2': {
              blockindex: 215262,
              time: 1538053730,
              coin: 'COQUI',
              amount: 2.1917024,
              blocktime: 1538053730,
              blockhash:
                '024c79386ba5b298cc48322050afe1af2fd838530bddf96e2a4898c163dd7501',
              category: 'receive',
              confirmations: 24883,
              txid:
                '2b84d09bed3acbd0cfc29581bdc78b6532d111d36e6e61c9baf813d89fe622a2'
            }
          }
        },
        PIZZA: {
          list: [
            '0dcf8cdb884d6a0244d7283281429916268987e8b8c9f3a279ffd97bce408c1d',
            '9a364d8bf46304eae4b64e704eb77ddba400a11e61264e451391f53b5ff115a3',
            '6b19bc479c043254fc55f6596e0cf2c5816bb8d7b315b42cf8417197915c0089',
            '44dd62270eda3a0658b494d8f8d7d52b1d5e89f4eedc49e94339d2790618e289',
            '472bb1d3643082cadb7b44c647a2ce2ffebfb49efbd1d9487b43f7a2ca855d5d',
            'de2166a02486f85ed4208e15d69d78f8e7bc9bd782e7c648940276c41847362c'
          ],
          entities: {
            '0dcf8cdb884d6a0244d7283281429916268987e8b8c9f3a279ffd97bce408c1d': {
              blockindex: 37031,
              time: 1540836927,
              coin: 'PIZZA',
              amount: 0.67694,
              blocktime: 1540836927,
              blockhash:
                '04c842feaa24955c70efcf3aad33a4456b6a2a4d4c927523c39f8cd535100123',
              category: 'receive',
              confirmations: 200,
              txid:
                '0dcf8cdb884d6a0244d7283281429916268987e8b8c9f3a279ffd97bce408c1d'
            },
            '9a364d8bf46304eae4b64e704eb77ddba400a11e61264e451391f53b5ff115a3': {
              blockindex: 37029,
              time: 1540836282,
              coin: 'PIZZA',
              amount: -0.67696,
              blocktime: 1540836282,
              blockhash:
                '0868fd8effbd507ec2439b39002f39a3d3de470d965377faf27170e01e6ce5e7',
              category: 'send',
              confirmations: 202,
              txid:
                '9a364d8bf46304eae4b64e704eb77ddba400a11e61264e451391f53b5ff115a3'
            },
            '6b19bc479c043254fc55f6596e0cf2c5816bb8d7b315b42cf8417197915c0089': {
              blockindex: 37028,
              time: 1540835670,
              coin: 'PIZZA',
              amount: 0.67697,
              blocktime: 1540835670,
              blockhash:
                '0bd7d8626674f7ceb6df8c417fd6a247ef40fea5e309411a75babefdc87262d9',
              category: 'receive',
              confirmations: 203,
              txid:
                '6b19bc479c043254fc55f6596e0cf2c5816bb8d7b315b42cf8417197915c0089'
            },
            '44dd62270eda3a0658b494d8f8d7d52b1d5e89f4eedc49e94339d2790618e289': {
              blockindex: 37027,
              time: 1540835342,
              coin: 'PIZZA',
              amount: -0.67698,
              blocktime: 1540835342,
              blockhash:
                '0843542f3d8ea85e7e42f17082bc51fe596e4393fd3fb087cabb04804ace6534',
              category: 'send',
              confirmations: 204,
              txid:
                '44dd62270eda3a0658b494d8f8d7d52b1d5e89f4eedc49e94339d2790618e289'
            },
            '472bb1d3643082cadb7b44c647a2ce2ffebfb49efbd1d9487b43f7a2ca855d5d': {
              blockindex: 36428,
              time: 1536342267,
              coin: 'PIZZA',
              amount: -0.1,
              blocktime: 1536342267,
              blockhash:
                '0573bf6b119728bbc98ce4e6009c5134905c346bb68e814ff043485c12340161',
              category: 'send',
              confirmations: 803,
              txid:
                '472bb1d3643082cadb7b44c647a2ce2ffebfb49efbd1d9487b43f7a2ca855d5d'
            },
            de2166a02486f85ed4208e15d69d78f8e7bc9bd782e7c648940276c41847362c: {
              blockindex: 36409,
              time: 1535784202,
              coin: 'PIZZA',
              amount: 0.777,
              blocktime: 1535784202,
              blockhash:
                '0cf5a10d89e068efdc18dfd567a2ea6611d5c56ae5d81fced64696cb94b7e3aa',
              category: 'receive',
              confirmations: 822,
              txid:
                'de2166a02486f85ed4208e15d69d78f8e7bc9bd782e7c648940276c41847362c'
            }
          }
        }
      }
    },
    withdrawModal: {
      open: false,
      coin: null
    },
    depositModal: {
      open: false,
      coin: null
    }
  }
};

it('containers/WalletPage/saga/fake-data', () => {
  expect(1).toEqual(1);
});
