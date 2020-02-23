/* eslint-disable import/no-unresolved */
import http from 'k6/http';

export default function () {
  const url = '';
  const payload = JSON.stringify({ user: 5, category: 'food', amount: 400000 });
  const params = { headers: { 'Content-Type': 'application/json' } };
  http.post(url, payload, params);
}
