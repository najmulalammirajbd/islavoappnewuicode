import { Share, View, Button } from 'react-native';
import { MaterialCommunityIcons , Ionicons , FontAwesome5 } from '@expo/vector-icons';

const ShareExample = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'islavo | islamic music is always | https://play.google.com/store/apps/details?id=com.islavo | #islavo',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={{ marginTop: 7 }}>
        <Ionicons onPress={onShare} name="ios-share-social-outline" size={20} color="white" />
    </View>
  );
};

export default ShareExample;