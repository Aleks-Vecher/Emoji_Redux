import Form from './Components/Form'
import EmojiContainer from "./Components/EmojiCOntainer";
import {useEffect} from "react";
import axios from "axios";
import {setItems} from './store/reducers/data'
import {setLoadedValue} from './store/reducers/load'
import store from './store'

function App() {
  useEffect(() => {
    const fetchData = async () => {
      store.dispatch(setLoadedValue(true))
      const result = await axios('https://raw.githubusercontent.com/sulemanof/js-lectures/master/react/emojiList.json');
      store.dispatch(setItems(result.data));
      store.dispatch(setLoadedValue(false))
    }
    fetchData()
  }, [])

  return (
      <>
        <Form/>
        <EmojiContainer/>
      </>
  );
}

export default App
