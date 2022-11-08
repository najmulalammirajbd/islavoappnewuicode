import { SafeAreaView, ScrollView } from 'react-native';
import Header from '../Header/Header';
import Baner from '../Baner/Baner';
import Main from '../Main/Main';
import Media from '../Media/Media';



export default function Home() {
  return (
    <SafeAreaView>
        <ScrollView>
        <Header/>
        <Baner/>
        <Main/>
        </ScrollView>
    </SafeAreaView>
  );
}