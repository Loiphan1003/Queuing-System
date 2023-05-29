import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import { device } from "../../types";
import { db } from "./index";

export const addData = async (data: device) => {
    const { id, ...value } = data;
    const docRef = await addDoc(collection(db, "devices"), value);
    // console.log("Document written with ID: ", docRef.id);
    return docRef.id
};

export const getAllDataInColection = async () => {
    let res: device[] = [];
    const querySnapshot = await getDocs(collection(db, "devices"));
    querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        res.push({ ...doc.data(), id: doc.id } as device);
    });
    return res;
};

export const updateData = async (data: device, nameColection: string) => {
    try {
        const { id, ...value} = data;
        await setDoc(doc(db, nameColection, id), value)
        return true;
    } catch (error) {
        return []
    }
}
