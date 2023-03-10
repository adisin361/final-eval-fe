export const BACKEND_URL = 'http://localhost:4000';
export const AUTH_URL = 'http://localhost:5050/user';

export const LOGIN_URL = {
  url: 'login',
  method: 'post'
};

export const REGISTER_URL = {
  url: 'register',
  method: 'post'
};

export const VALIDATE_TOKEN_URL = {
  url: '/token/validate',
  method: 'get'
};

export const CREATE_CONTENT_TYPE_URL = {
  url: 'record/save',
  method: 'post',
};

export const UPDATE_CONTENT_TYPE_URL = {
  url: 'record/update',
  method: 'post',
};

export const ADD_FIELD_CONTENT_URL = {
  url: 'record/field',
  method: 'post',
};

export const EDIT_FIELD_CONTENT_URL = {
  url: 'record/save',
  method: 'patch',
};

export const DELETE_FIELD_CONTENT_URL = {
  url: 'record/save',
  method: 'delete',
};

export const GET_CONTENT_DETAIL_URL = {
  url: 'record/details',
  method: 'get',
};

export const GET_COLLECTION_DETAILS = {
  url: 'collection/details',
  method: 'get',
};

export const GET_COLLECTION_DATA = {
  url: 'collection/details',
  method: 'post'
};

export const DELETE_COLLECTION_ENTRY = {
  url: 'collection/field',
  method: 'delete'
};

export const EDIT_COLLECTION_ENTRY = {
  url: 'collection/update',
  method: 'patch'
};

export const ADD_COLLECTION_ENTRY = {
  url: 'collection/update',
  method: 'post'
};
