import { useEffect } from "react";
import  firebase from "./firebase";
import { getDatabase, ref, set,push, onValue } from "firebase/database";
import {useState} from "react";
export const AddUser=(info)=> {
  const db = getDatabase(firebase);
  const useRef= ref(db, 'users/');
  const newUserRef= push(useRef);
  set(newUserRef, {
    username: info.username,
    phoneNumber: info.phoneNumber,
    gender: info.gender
  });
}
export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contactList, setContactList] = useState();
  useEffect(() => {
    const db = getDatabase(firebase);
    const usersRef = ref(db, 'users/');
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];
      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      setContactList(userArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, contactList };    }
