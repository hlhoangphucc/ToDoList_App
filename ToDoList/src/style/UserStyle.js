import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    height: 50,
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#1e2f40',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  icon: {
    width: 40,
    height: 40,
    color: 'white',
  },
  avtContainer: {
    paddingTop: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
  avatar: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'yellow',
    height: 150,
    width: 150,
  },
  nameContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  btnEditProfile: {
    width: '45%',
  },
  btnLogOut: {
    width: '45%',
  },
  modalContainer: {
    backgroundColor: '#ff8000',
    borderWidth: 3,
    padding: 16,
    borderRadius: 8,
  },
  btnContainer: {
    backgroundColor: '#ff8000',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btnModal: {
    width: '40%',
    height: '100%',
  },
  inputText: {
    width: '70%',
    borderWidth: 0,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});
export default styles;
