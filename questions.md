# Commonly Asked Questions

### What is the Secret Network?
The Secret Network is a decentralized network of computers (which we call "secret nodes") that use hardware-based and software-based privacy technologies to enable **secure computation.** On top of this network, developers can build **Secret Apps** - unstoppable, permissionless applications that can utilize encrypted data without ever exposing the data itself, even to the nodes in the network performing computations.

### Why privacy?
Members of our community, including secret node operators and Secret App developers, believe that **privacy is a fundamental human right and a public good.** Privacy needs to be protected and supported by the technologies we use in daily life. However,  an overly centralized internet and large data monopolies have put our privacy, our security, and our society at risk. That's why we are dedicated to building solutions with privacy at their core, empowering users to take and keep control of their valuable information. Privacy makes the applications we rely on more usable and more secure - and when it is not protected, neither are we.

### Why blockchain?
By using blockchain, a decentralized network of computers can reach consensus on the state of the network while remaining open and permissionless. Secret Network is built on [Cosmos SDK / Tendermint](https://tendermint.com/sdk/), a popular blockchain framework, allowing for a wide variety of organizations and individuals to participate in our community and network. The only way to build a sustainable foundation for privacy-first applications is by creating a diverse and transparent culture, united by the purpose of data dignity for all!

### What are secret contracts?
"Secret contracts" are _privacy-preserving_ smart contracts built on Secret Network. Smart contracts (in this context) are essentially self-executing pieces of code that are managed on a blockchain. Secret contracts improve on regular smart contracts in that they not only solve for _correctness_, but also for _data privacy_. Secret contracts are written in the Rust programming language. Secret Apps utilize the capabilities of secret contracts to enable unique use cases that empower users and increase opportunities for growth and impact.

### What's so special about secret contracts?
Blockchains, and by extension smart contracts, have one glaring problem that is often overlooked — all data stored on them is public. In that sense, blockchains are worse than anything that came before them when it comes to privaacy. Instead of trusting your data with a single organization (e.g., as is the case with Facebook, Google, your bank, etc), you now have to trust *everyone.* However, we do want to enjoy the benefits of smart contracts and decentralized applications (or dApps): they are robust, unstoppable, censor-resistant and transparent. Secret contracts and Secret Apps combine these benefits of dApps but add data privacy, helping remove one of the biggest barriers to mass adoption of the decentralized web. 

### What is computational privacy?
Secret Network is focused on achieving _computational privacy_. Most privacy solutions in the blockchain space today concentrate only on _transactional privacy_, specifically obscuring data on senders or receivers of transactions. Computational privacy is a much more expansive vision, as a transaction is just one (trivial) type of computation. Secret Network allows applications to use encrypted inputs, encrypted outputs, and encrypted state, meaning we can enable groundbreaking new use cases for smart contracts and decentralized applications.

### What is SCRT?
SCRT (pronounced "Secret") is the native coin of the Secret Network. This means SCRT is used to pay fees and transfer value on the network. Secret nodes must stake SCRT in order to operate on the network, and in return they receive fees and network rewards in SCRT. When nodes go offline, they can be "slashed" and lose a portion of their SCRT stake. Holders of SCRT who are not operating nodes may "bond" their stake to a specific node in order to become a _delegator_. Delegators have an opportunity to earn a share of fees and network rewards by supporting a particular set of validators.

Another utility for SCRT is governance of the network. Secret nodes can create and vote on governance proposals using SCRT, allowing for decentralized control of the network.

### What does Secret Network help solve?
Everything! Which applications would you use every day if they could not protect you or your data? When you use blockchains today for any purpose, you are forced to compromise on privacy. Any deecentralized applications built on Secret Network benefit from its privacy protections. Our community is primarily focused on use cases that help us achieve our stated mission: to advance privacy as a human right and a public good; to empower individuals through development and use of decentralized technologies; and to protect freedom and create more valuable systems by eliminating data monopolies.

Sample use cases include: privacy-preserving credit scoring and lending; private on-chain auctions for cryptoart and other digital collectibles; decentralized access control; secret voting for collective decision-making; privacy-preserving machine learning; and many more applications in the fields of decentralized finance, gaming, healthcare, and dozens of other industries.

### What are Trusted Execution Environments, and why do we use them?
[Trusted Execution Environments](https://en.wikipedia.org/wiki/Trusted_execution_environment) (TEEs) are special enclaves inside a computer that function like a "black box", allowing computations to occur _confidentially_ inside of them. They are utilized in a broad range of everyday hardware, including the fingerprint readers in smartphones. Secret nodes in the network use these secure enclaves to protect the data used by secret contracts.

While our community is constantly exploring other innovative privacy solutions (such as multi-party computing, homomorphic encryption, private set intersection, etc.), they are simply not practical to use in production for applications today. There are always tradeoffs between scalability, performance, and security, and today secure enclaves provide the the best option for protecting data privacy in a decentralized network. We continue to explore and research other solutions!

### What is Cosmos, and why are you using their technologies?
[Cosmos](https://cosmos.network/) represents a standard approach to developing scalable and interoperable blockchain applications. We believe the Cosmos SDK, Tendermint and Inter-Blockchain Communication Protocol (IBC) are groundbreaking since they are looking ahead to a future of many interconnected, app-specific blockchains. We're excited to see how Secret Network can bring more privacy solutions to the Cosmos ecosystem. [Learn more about this on our blog.](https://blog.scrt.network/secret-hub/)

### Why is Secret Network essential for Decentralized Finance?
Blockchains like Ethereum are public by default, and so far they are only weak attempts to provide transactional privacy. Our approach is differently motivated by solving for computational privacy. This enables any kind of DeFi product developer to leverage power of secure enclaves to reduce data liability and empower users with data control. Example: Salad

### Is Secret Network a "Layer One" or "Layer Two" solution?
Secret Network has its own consensus and provides privacy for smart contracts deployed on the network, without Secret Network needing to interoperate with any other blockchain. We have often referred to this as "blockchain independence", but based on this description, others would call Secret Network a "Layer One" blockchain. However, part of our vision has always been bringing privacy to *every* blockchain. This means our community is continuing to explore key "Layer Two" functionality for Secret Network, such as by utilzing [IBC](https://cosmos.network/ibc) / Cosmos interoperability, building an Ethereum bridge, or other means.
