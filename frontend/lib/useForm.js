import { useState, useEffect } from "react";

function useForm(initial = {}) {
	// create a state object for our input
	const [inputs, setInputs] = useState(initial);
	const initialValue = Object.values(initial).join("");

	useEffect(() => {
		setInputs(initial);
	}, [initialValue]);

	function handleChange(e) {
		let { value, name, type } = e.target;
		if (type === "number") {
			value = Number(value);
		}

		if (type === "file") {
			[value] = e.target.files;
		}
		setInputs({
			...inputs,
			[name]: value,
		});
	}

	function resetForm() {
		setInputs(initial);
	}

	/*
        take the [input] object and turn it into an array with Object.entries()
        then map through the array and destructure the key and value and for each key, we set the value to empty
    */
	function clearForm() {
		const blankState = Object.fromEntries(
			Object.entries(inputs).map(([key, value]) => [key, ""])
		);
		setInputs(blankState);
	}

	// return the things we want to surface
	return {
		inputs,
		handleChange,
		resetForm,
		clearForm,
	};
}

export default useForm;
