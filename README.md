# We-Fund: A Web3 Crowdfunding Platform

## Table of Contents

1. **Introduction**
2. **Features**
3. **Tech Stack**
4. **Project Architecture**
5. **Installation and Setup**
6. **Usage**
7. **Smart Contracts**
8. **Contributing**
9. **Known Issues & Limitations**
10. **Future Roadmap**
11. **License**
12. **Acknowledgements**

---

## 1. Introduction

We-Fund is a decentralized crowdfunding platform inspired by Kickstarter. Built with Web3 technologies, it enables users to create and fund projects using cryptocurrency. By leveraging blockchain technology, We-Fund ensures a transparent and trustless environment for fundraisers and backers.

---

## 2. Features

- **Project Creation**: Users can create fundraising projects with a title, description, and fundraising goal.
- **Funding**: Other users can contribute cryptocurrency to active projects.
- **Milestone-Based Withdrawals**: Project creators can withdraw funds only after achieving pre-defined milestones.
- **Transparency**: All transactions are stored on the blockchain, ensuring accountability.
- **Security**: Funds are securely held in smart contracts until withdrawal conditions are met.

---

## 3. Tech Stack

The project is built on the following technologies:

- **Frontend**: 
  - JavaScript (React.js)
  - Styling libraries (CSS/SCSS or frameworks like TailwindCSS)
- **Backend**:
  - Solidity for smart contracts
- **Blockchain**:
  - Ethereum Virtual Machine (EVM)
  - Web3.js or ethers.js for blockchain interaction
- **Development Tools**:
  - Hardhat for smart contract development and testing
  - MetaMask for user authentication and wallet integration

---

## 4. Project Architecture

### **Folder Structure**

```
we-fund/
├── contracts/       # Solidity smart contracts
├── src/
│   ├── components/  # Reusable React components
│   ├── pages/       # React pages
│   ├── styles/      # CSS or SCSS files
│   └── utils/       # Helper functions or utilities
├── tests/           # Smart contract tests
├── public/          # Static assets
├── hardhat.config.js # Hardhat setup
└── README.md        # Project documentation
```

### **Workflow**

1. Users connect their Ethereum wallet using MetaMask.
2. Users can create a new crowdfunding campaign.
3. Backers contribute cryptocurrency to campaigns.
4. Funds are locked in a smart contract until project milestones are achieved.
5. Campaign creators can withdraw funds upon milestone approval by backers.

---

## 5. Installation and Setup

### **Prerequisites**

- Node.js (v16 or higher)
- npm or yarn
- MetaMask extension installed in your browser
- Hardhat installed globally (`npm install --global hardhat`)

### **Steps**

1. Clone the repository:
   ```bash
   git clone https://github.com/DaviDemarqui/we-fund.git
   cd we-fund
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Compile the smart contracts:
   ```bash
   npx hardhat compile
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Deploy the smart contracts to a local blockchain:
   ```bash
   npx hardhat node
   npx hardhat run scripts/deploy.js --network localhost
   ```

6. Configure MetaMask:
   - Add the local blockchain network.
   - Import the private key of an account from the Hardhat node.

---

## 6. Usage

### **Creating a Campaign**

1. Connect your wallet using the "Connect Wallet" button.
2. Navigate to the "Create Campaign" page.
3. Fill in the campaign details:
   - Title
   - Description
   - Funding Goal
   - Milestones (if applicable)
4. Submit the form to deploy the campaign.

### **Backing a Campaign**

1. Browse active campaigns on the homepage.
2. Select a campaign to view its details.
3. Enter the amount you wish to contribute and confirm the transaction via MetaMask.

### **Withdrawing Funds**

- The campaign creator can request a withdrawal after achieving a milestone.
- Backers can vote to approve or deny the withdrawal.

---

## 7. Smart Contracts

### **Overview**

The core logic of the platform is implemented in Solidity smart contracts. Below are the key contracts:

1. **WeFund.sol**: The main contract managing campaigns and funds.
2. **Campaign.sol**: A sub-contract representing individual campaigns.

### **Key Functions**

#### **Campaign Creation**
```solidity
function createCampaign(string memory title, uint goal) public;
```

#### **Funding**
```solidity
function fundCampaign(uint campaignID) public payable;
```

#### **Withdrawal**
```solidity
function requestWithdrawal(uint campaignID) public;
function approveWithdrawal(uint campaignID) public;
```

### **Testing**

- Run smart contract tests using Hardhat:
  ```bash
  npx hardhat test
  ```

---

## 8. Contributing

We welcome contributions from the community! Here's how you can get involved:

1. Fork the repository.
2. Create a new branch for your feature or fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push your branch and open a Pull Request.

### **Code of Conduct**

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

---

## 9. Known Issues & Limitations

- Currently supports only Ethereum blockchain.
- Limited UI/UX design; improvements are welcome.
- Smart contracts are not audited for production use.

---

## 10. Future Roadmap

- Support for multiple blockchain networks (e.g., Binance Smart Chain, Polygon).
- Enhanced UI/UX with additional features.
- Integration with IPFS for decentralized storage of campaign content.
- Mobile-friendly design.
- Comprehensive smart contract audit.

---

## 11. License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 12. Acknowledgements

- Inspiration: Kickstarter
- Tutorials and resources:
  - [Ethereum Documentation](https://ethereum.org/en/developers/docs/)
  - [Hardhat Documentation](https://hardhat.org/docs/)
  - [MetaMask Documentation](https://docs.metamask.io/)
- Special thanks to the Web3 development community for their continuous support and resources.
