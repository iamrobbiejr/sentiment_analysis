# Information *****************************************************


class AuthState:

    def authenticate(user, solution=None):

        solution.append({
            "user": user,
            "status": 200,
        })

        return solution
