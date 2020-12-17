import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import './ToastNotifier.scss';
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineWarning } from 'react-icons/ai';

export const ToastNotificationContainer = ToastContainer;

export const SuccessToast = (message: any) => (
    toast(<div className="toast toast--success">
        <div>
            <AiOutlineCheckCircle size={18} className="mr-1" />
        </div>
        <div className="toast--message">{message}</div>
    </div>)
)

export const FailToast = (message: any) => (
    toast(<div className="toast toast--error">
        <div>
            <AiOutlineCloseCircle size={18} className="mr-1" />
        </div>
        <div className="toast--message">{message}</div>
    </div>)
)

export const WarnToast = (message: any) => (
    toast(<div className="toast toast--warning">
        <div>
            <AiOutlineWarning size={18} className="mr-1" />
        </div>
        <div className="toast--message">{message}</div>
    </div>)
)
