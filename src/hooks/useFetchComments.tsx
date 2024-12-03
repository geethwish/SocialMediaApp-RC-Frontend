import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCommentsByPostId } from '../services/api';
import { Comment } from '../types';
import { CustomAlert } from '../util/alertHandler';


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
            CustomAlert('Failed to fetch comments. Please try again.', 'error');
            throw err
        } finally {
            setIsLoading(false);
        }
    };

    // Refresh comments
    const refresh = () => {
        getComments();
    }

    // Fetch comments on component mount
    useEffect(() => {
        getComments();
    }, [dispatch, postId]);

    return { comments, isLoading, error, refresh };
};