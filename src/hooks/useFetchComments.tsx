import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCommentsByPostId } from '../services/api';
import { Comment } from '../types';


export const useFetchComments = (postId: string) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const dispatch = useDispatch();

    const getComments = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const result = await getCommentsByPostId(postId);
            const reverseData = result.reverse();
            setComments(reverseData);
        } catch (err) {
            setError('Failed to fetch comments. Please try again.');
            throw err
        } finally {
            setIsLoading(false);
        }
    };

    const refresh = () => {
        getComments();
    }
    useEffect(() => {
        getComments();
    }, [dispatch, postId]);

    return { comments, isLoading, error, refresh };
};