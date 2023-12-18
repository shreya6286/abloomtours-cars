import axios from 'axios';

const client_server = 'http://xpediolive.com:5661';

export async function callServerApi (api_name, data_jo, clause_jo) {
	const res = await axios.post(client_server+'/server_api', { 'api': api_name, 'data': data_jo, 'clause': clause_jo });
	return res.data;
}

export async function callExternalApi (url, clause_data) {
	const res = await axios.post(url, clause_data);
	return res.data;
}

export async function uploadFile (file, form_data) {
	const formdata = new FormData();
	formdata.append('file', file, form_data['file_name']);
	const res = await axios.post(client_server+'upload', { 'api': 'upload', 'data': formdata});
	return res;
}

