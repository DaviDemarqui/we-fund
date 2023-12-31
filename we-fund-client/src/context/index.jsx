import { useContext, createContext } from "react";
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useContract, useContractWrite, useAddress, useMetamask } from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {

    const sdk = new ThirdwebSDK(Sepolia, {
        clientId: import.meta.env.CLIENT_ID,
    });

    const { contract } = useContract("0x129ce401CB1803c0f6cC8862c2DFE2df12C392CF");
    const { mutateAsync: createCampaign, isLoading } = useContractWrite(contract, "createCampaign")

    const address = useAddress();
    const connect = useMetamask();

    const publishCampaign = async (form) => {
        try {
            console.log(form);
            const data = await createCampaign({ args: [address, form.title, form.description, form.target, new Date(form.deadline).getTime(), form.image] });
            console.log('Contract called successfully!', data);
        } catch (error) {
            console.error("Contract call failed!", error);
        }
    }

    const getCampaigns = async () => {
        const campaigns = await contract.call('getCampaigns');

        const parsedCampaings = campaigns.map((campaign, i) => ({
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            target: ethers.utils.formatEther(campaign.target.toString()),
            deadline: campaign.deadline.toNumber(),
            amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
            image: campaign.image,
            pId: i
        }));

        return parsedCampaings;
    }

    return (
        <StateContext.Provider
            value={{
                address,
                connect,
                contract,
                createCampaign: publishCampaign,
                getCampaigns,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
