import { useState } from "react";
import { Text, Image, View, ScrollView, Button, Pressable, Modal } from "react-native";

export default function Index() {

  const [isOpen, setIsOpen] = useState(true);

  return (
    <ScrollView
      style={{ flex: 1}}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
      }}
    >
      <Text>Welcome to React</Text>

      <Image
        source={ require ("@/assets/images/react-logo.png" )}
        style={{ width: 600, height: 600 }}
      />

      <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod esse officia aut, velit delectus, temporibus voluptate debitis perspiciatis ratione et blanditiis itaque provident possimus pariatur at quam deserunt dignissimos accusamus.</Text>
    
    <Button title="Press me" onPress={() => console.log('Clicked')}></Button>

    <Pressable
      onPress={() => console.log('onPress')}
      onPressIn={() => console.log('onPressIn')}
      onPressOut={() => console.log('onPressOut')}
      onLongPress={() => console.log('onLongPress')}
    >
      <Text>Press text</Text>
    </Pressable>

      <Modal visible={isOpen} animationType="fade">
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>This is a modal</Text>
          <Button title="Close" onPress={() => setIsOpen(false)}></Button>
        </View>
      </Modal>

    </ScrollView>
  );
}
