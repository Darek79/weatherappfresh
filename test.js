const string = '2022-12-11T11:00:21+09:00';
const splitted = string.split('T')[1];
const date = splitted.substring(0, 5);
