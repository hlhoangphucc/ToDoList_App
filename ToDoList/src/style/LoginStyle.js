import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingTop: 30,
  },
  header: {
    paddingLeft: 20,
    alignItems: 'flex-start',
  },
  body: {
    alignItems: 'center',
    flex: 1,
  },
  bottom: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 50,
  },
  textHeader: {
    color: 'white',
    fontSize: 30,
    paddingBottom: 20,
  },
  emailInput: {
    width: '80%',
    borderWidth: 0,
    borderBottomWidth: 2,
    marginBottom: 50,
  },
  passwordInput: {
    width: '80%',
    borderWidth: 0,
    borderBottomWidth: 2,
    marginBottom: 50,
  },
  btn: {
    backgroundColor: 'red',
  },
  imgcontent: {
    width: '80%',
    marginLeft: 10,
    height: 150,
    borderRadius: 5,
  },
  imgContainer: {
    alignItems: 'center',
  },
});
export default styles;
