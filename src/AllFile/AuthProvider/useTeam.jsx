import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useTeamData = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const { refetch, data: team = [] } = useQuery({
        queryKey: ['team', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/team?email=${user.email}`);
            return res.data;
        }
    })

    return [team, refetch]
};
export default useTeamData;