class Api {
  constructor ({url, headers}) {
    this._url = url
    this._headers = headers;
  }

  getUserInfo () {
    return fetch(`${this._url}/users/me`,
    {
      headers: this._headers
    }
    )
    .then(this._result)
  }

  getInitialCards () {
    return fetch(`${this._url}/cards`,
    {
      headers: this._headers
    }
    )
    .then(this._result)
  }


  setUserAvatar (avatar) {
    return fetch(`${this._url}/users/me/avatar`,
    {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(avatar)
    }
    )
    .then(this._result)
  }

  setProfileData (userData) {
    return fetch(`${this._url}/users/me/`,
    {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(userData)
    }
    )
    .then(this._result)
  }

  addNewCard (cardData) {
    return fetch(`${this._url}/cards`,
    {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(cardData)
    }
    )
    .then(this._result)
  }


  deleteCard (cardId) {
    return fetch(`${this._url}/cards/${cardId}`,
    {
      method: 'DELETE',
      headers: this._headers,
    }
    )
    .then(this._result)
  }

  putLike (cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`,
    {
      method: 'PUT',
      headers: this._headers,
    }
    )
    .then(this._result)
  }

  deleteLike (cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`,
    {
      method: 'DELETE',
      headers: this._headers,
    }
    )
    .then(this._result)
  }

  _result(res) {
    if(res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Произошла ошибка: ${res.status}, ${res.statusText}`);
    }
  }

}

export const api = new Api({
  url: 'https://mesto.nomoreparties.co./v1/cohort-68',
  headers: {
    authorization: 'ca1ad0da-7d1b-4b57-af90-a949f65fb3b0',
    'Content-Type': 'application/json',
  },
});