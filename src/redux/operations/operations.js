import axios from "axios";
import { getNumber } from "../../redux/actions/actions";

const addNewNumberOperation = (number) => async (dispatch) => {
  try {
    await axios.post(
      `https://socialprofile-96fb9-default-rtdb.firebaseio.com/numbers.json`,
      number
    );
  } catch (error) {
    console.log(error);
  } finally {
  }
};

const deleteNumberOperation = (id) => (dispatch) => {
  try {
    axios
      .delete(
        `https://socialprofile-96fb9-default-rtdb.firebaseio.com/numbers/${id}.json`
      )
      .then(() => console.log(" "));
  } catch (error) {
    console.log(error);
  } finally {
  }
};

const getNumberOperation = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://socialprofile-96fb9-default-rtdb.firebaseio.com/numbers.json`
    );
    const students = Object.keys(response.data).map((key) => ({
      ...response.data[key],
      id: key,
    }));

    dispatch(getNumber(students));
  } catch (error) {
    console.log(error);
  } finally {
  }
};

export { addNewNumberOperation, getNumberOperation, deleteNumberOperation };
