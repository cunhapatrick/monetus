export const addCompanyRequest = companySymbol => ({
  type: 'ADD_COMPANY_REQUEST',
  payload: { companySymbol },
});

export const addCompanySuccess = data => ({
  type: 'ADD_COMPANY_SUCCESS',
  payload: { data },
});
