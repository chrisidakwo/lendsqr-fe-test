import {User} from "../../models";

export interface UseUserApiReturnProps {
    fetchUsers: (page: number | string, limit: number) => Promise<User[]>;
    fetchUser: (userId: string) => Promise<User>;
}

export const useUserApi = (): UseUserApiReturnProps => {
    /**
     * Fetch a list of users specifying the page and limit.
     *
     * @param {number|string} page
     * @param {number} limit
     */
    const fetchUsers = (page: number | string = 1, limit: number = 10): Promise<User[]> => {
        if (limit > 10) {
            limit = 10;
        }

        const url = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users?page=${page}&limit=${limit}`;

        return fetch(url).then((res) =>
            res.json()
                .then((users) => Promise.resolve(users))
                .catch((error) => console.log('Error', error.response))
        );
    };

    /**
     * Fetch a single user resource.
     *
     * @param {string} userId
     */
    const fetchUser = (userId: string): Promise<User> => {
        const url = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`;
        return fetch(url).then((res) =>
            res.json()
                .then(user => Promise.resolve(user))
                .catch((error) => console.log('Error', error.response))
        );
    }

    return { fetchUsers, fetchUser };
};
