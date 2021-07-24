import { useSelector } from "react-redux"
import ErrorMessage from '@components/ErrorMessage'
import NotFoundMessage from '@components/NotFoundMessage'

export const withInfoMessages = View => {
    return props => {
        const infoMessagesStatus = useSelector(state => state.infoMessagesStatusReducer)
        const errorApi = infoMessagesStatus.errorApi
        const notFound = infoMessagesStatus.notFound
        return (
            <>
                {errorApi.status
                    ? <ErrorMessage error={errorApi.type.message} />
                    : notFound
                        ? <NotFoundMessage />
                        : (
                            <View {...props} />
                        )
                }
            </>
        )
    }
}