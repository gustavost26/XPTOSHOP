import { ethers } from "ethers";
import { toast } from "react-toastify";

const tokenAddress = '0x3f0af63F73AFe2C5f084e1C48B94C13b255867bA';
const tokenABI = [
  "function balanceOf(address owner) view returns (uint256)"
];

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
      })
      const account = accounts[0];
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = provider.getSigner();
      const tokenContract = new ethers.Contract(tokenAddress, tokenABI, provider);
      const balance = await tokenContract.balanceOf(account);
      const balanceInTokens = ethers.formatUnits(balance, 18);
      return { account, balance: balanceInTokens, provider, signer }
    } catch (e) {
      console.error(e);
      toast.error('Ocorreu um erro ao se conectar com a carteira')
    }
  }
}