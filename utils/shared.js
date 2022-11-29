
function handleResponse(res, code, statusMsg) {
  res.status(code).json({ status: statusMsg });
}

function handleResponseWithData (res, code, data) {
  res.status(code).json(data);
}

module.exports = {
  handleResponse,
  handleResponseWithData
};
