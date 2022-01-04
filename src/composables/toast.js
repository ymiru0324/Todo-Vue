import { ref, onUnmounted } from 'vue';

export const useToast = () => {
    const showToast = ref(false);
    const toastMessage = ref('');
    const toastAlertType = ref('');
    const timeout = ref(null);
    const triggetToast = (message, type = 'success') => {
        toastMessage.value = message;
        toastAlertType.value = type;
        showToast.value = true;
        timeout.value = setTimeout(() => {
            toastMessage.value = '';
            toastAlertType.value = '';
            showToast.value = false;
        }, 3000)
    }
    
    onUnmounted(() => {
        clearTimeout(timeout.value);
    });

    return {
        showToast,
        toastMessage,
        toastAlertType,
        triggetToast
    }
}