import { useThemeColor } from '@/hooks/use-theme-color';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';

const PullToRefreshScreen = () => {
  const textColor = useThemeColor({}, 'text')
  const [isRefreshing, setIsRefreshing] = useState(false)
  const onRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setIsRefreshing(false)
    },2000)
  }
  return (
    <ScrollView
      refreshControl={
        <RefreshControl 
          refreshing={ isRefreshing } 
          onRefresh={ onRefresh }
          colors={['black', 'teal']}
          progressBackgroundColor={'white'}
        />
      }
    >
      <ThemedView margin>
        {
          !isRefreshing && 
            <>
              <ThemedText>PullToRefreshScreen</ThemedText>
              <Ionicons name='arrow-down' size={24} color={textColor} className='m-2'/>
            </>
        }
      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
