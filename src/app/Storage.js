import RNSecureKeyStore, {ACCESSIBLE} from "react-native-secure-key-store";

export default class Storage {
    
    static async set(key, value) {
        try {
            await RNSecureKeyStore.set(key, value, { accessible: ACCESSIBLE.AFTER_FIRST_UNLOCK_THIS_DEVICE_ONLY});
            return true;
        } catch (err) {
            return false;
        }
    }
    
    static async get(key) {
        try {
            const res = await RNSecureKeyStore.get(key);
            return res;
        } catch (err) {
            return false;
        }
    }
    
    static async remove(key) {
        await RNSecureKeyStore.remove(key);
    }

}