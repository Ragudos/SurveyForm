
interface Likes {
    cleanliness: boolean;
    environmentalFriendly: boolean;
    price: boolean;
    efficient: boolean;
    customerService: boolean;
}

interface InitialState {
    name: string;
    age: number;
    address: string;
    email: string;
    phoneNumber: string;
    occupation: string;
    likes: Likes;
    feedback: string;
};

const likes = {
    cleanliness: false,
    environmentalFriendly: false,
    price: false,
    efficient: false,
    customerService: false,
};

const initialState: InitialState = {
    name: '',
    age: 18,
    address: '',
    email: '',
    phoneNumber: '',
    occupation: '',
    likes,
    feedback: ''
};

const actionTypes = {
    SET_NAME: "SET_NAME",
    SET_AGE: "SET_AGE",
    SET_ADDRESS: "SET_ADDRESS",
    SET_EMAIL: "SET_EMAIL",
    SET_PHONE_NUMBER: "SET_PHONE_NUMBER",
    SET_OCCUPATION: "SET_OCCUPATION",
    SET_LIKES: "SET_LIKES",
    SET_FEEDBACK: "SET_FEEDBACK"
};

const {
    SET_NAME,
    SET_AGE,
    SET_ADDRESS,
    SET_EMAIL,
    SET_PHONE_NUMBER,
    SET_OCCUPATION,
    SET_LIKES,
    SET_FEEDBACK
} = actionTypes;

const formReducer = (state: any, action: any) => {
    switch (action.type) {
        case "SET_NAME":
            return {
                ...state,
                name: action.payload
            };
        case "SET_AGE":
            return {
                ...state,
                age: action.payload
            };
        case "SET_ADDRESS":
            return {
                ...state,
                address: action.payload
            };
        case "SET_EMAIL":
            return {
                ...state,
                email: action.payload
            };
        case "SET_PHONE_NUMBER":
            return {
                ...state,
                phoneNumber: action.payload
            };
        case "SET_OCCUPATION":
            return {
                ...state,
                occupation: action.payload
            };
        case "SET_LIKES":
            return {
                ...state,
                likes: action.payload
            };
        case "SET_FEEDBACK":
            return {
                ...state,
                feedback: action.payload
            };
    };
};

export {
    initialState,
    type InitialState,
    formReducer,
    SET_NAME,
    SET_AGE,
    SET_ADDRESS,
    SET_EMAIL,
    SET_PHONE_NUMBER,
    SET_OCCUPATION,
    SET_LIKES,
    SET_FEEDBACK
}