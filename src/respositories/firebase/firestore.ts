import Review from "@/models/review";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { firebaseFireStore } from "./config";
const getReviews = async () => {
    const reviews = await getDocs(collection(firebaseFireStore, Review.table));
    return reviews.docs.map((item) => new Review(item.data()));
}

const updateReview = async ({ id, content, email, userName }: { id?: string, userName: string, email: string, content: string }) => {
    const col = collection(firebaseFireStore, Review.table);
    const item = id ? doc(col, id) : doc(col);
    const data = {
        content, email, userName, lastUpdate: Date.now(), id: item.id
    }
    await setDoc(item, data);
}

export const FireStoreRepo = {
    getReviews,
    updateReview
}