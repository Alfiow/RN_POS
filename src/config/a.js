<Container>
  <Header />
  <Content scrollEnabled={false}>
    <SwipeRow
      leftOpenValue={75}
      rightOpenValue={-75}
      left={
        <Button success onPress={() => alert('Add')}>
          <Icon active name="add" />
        </Button>
      }
      body={
        <View>
          <Text>SwipeRow Body Text</Text>
        </View>
      }
      right={
        <Button danger onPress={() => alert('Trash')}>
          <Icon active name="trash" />
        </Button>
      }
    />
  </Content>
</Container>

<View style={style.CartItem}>
  <Text style={{ padding: 10, flex: 0.5 }}>
    {product}
  </Text>

  <Text style={{ flex: 0.2 }}>
    {price}
  </Text>
</View>

View style = {{ borderBottomWidth: 0.2 }}