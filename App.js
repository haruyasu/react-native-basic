import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
	return (
		<View stytle={{ flex: 1 }}>
			<Header headerText={'Albums!!!!!'}/>
			<AlbumList />
		</View>
	);
};

export default App;
