import { Account, Avatars, Client, Databases, Query, Storage } from "react-native-appwrite";
export const appwriteConfig ={
    endpoint:process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId:process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    Platform:"com.spego.foodordering",
    databaseId:"689b608e0028eac926c7",
    userCollectionId:"689b60fc003322884d03"
}

export const client = new Client();

client
   

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
const avatars = new Avatars(client);



export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();
        if(!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        if(!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (e) {
        console.log(e);
        throw new Error(e as string);
    }
}
