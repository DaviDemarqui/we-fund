import { useContext, createContext } from "react";
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useContract, useContractWrite, useAddress, useMetamask } from "@thirdweb-dev/react";

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
            const data = await createCampaign([
                address,
                form.title,
                form.description,
                form.target,
                new Date(form.deadline).getTime(),
                form.image
            ])
            console.log('Contract called successfully!', data);
        } catch (error) {
            console.error("Contract call failed!", error);
        }
    }

    return (
        <StateContext.Provider
            value={{
                address,
                connect,
                contract,
                createCampaign: publishCampaign,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
