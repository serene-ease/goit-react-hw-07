import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter.name;

export const selectVisibleContacts = createSelector([selectContacts, selectFilter], (items, name) => {
    return items.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
});