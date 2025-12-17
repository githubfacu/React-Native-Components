import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

const InfiniteScrollScreen = () => {
  const [data, setData] = useState(['People', 'Doing', 'Something', 'Great'])

  const loadMore = () => {
    const newArr = Array.from({ length: 4 }, (el, i) => `Item-${data.length + i + 1}`)
    
    setTimeout(() => {
      setData([...data, ...newArr])
    }, 2000)
  }
  return (
    <ThemedView>
      <FlatList 
        data={data}
        renderItem={ ({ item }) => <ThemedText className='my-6 text-3xl'>{ item }</ThemedText>}
        onEndReached={ loadMore }
        onEndReachedThreshold={.6}
        ListFooterComponent={ () => (
          <View className='mt-auto h-20 justify-center items-center'>
            <ActivityIndicator size={40}/>
          </View>
        )}
      />
    </ThemedView>
  );
};
export default InfiniteScrollScreen;
