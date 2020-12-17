import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { AiOutlineFilePdf } from "react-icons/ai"
import { BsImage } from "react-icons/bs"

import { makeApiRequest } from '../../services/ApiRequest/apiRequest'
import downloadFile from '../../utils/utilsFunction/fileDownloader'
import { truncateFileName } from '../../utils/utilsFunction/truncateFilename'
import { FailToast } from '../ToastNotifier/ToastNotifier'

interface AuthFileProps {
    type: string;
    path: string;
    internal?: boolean;
    filename: string;
    children?: any;
    className?: string;
    style?: React.CSSProperties;
    download?: boolean;
    iconOnly?: boolean;
}

const externalFilePath = `${process.env.REACT_APP_SPSC_ENDPOINT}psc/user/download/{type}/{path}`
const internalFilePath = `${process.env.REACT_APP_SPSC_ENDPOINT}psc/user/download/{type}/{path}`
export default function AuthFile({ type, path, internal, filename, children, className, style, download, iconOnly }: AuthFileProps): ReactElement {
    const getFile = () => {
        return makeApiRequest({controllerName: internal ? internalFilePath.replace("{type}", type).replace("{path}", path) : externalFilePath.replace("{type}", type).replace("{path}", path), actionName: "AUTHFILE"}, null, "GET");
    }

    const link = useRef<HTMLAnchorElement | null>(null);
    const handleAction = async () => {
        if(link.current) {
            
            if (link.current?.href) { return }
            
            const blob = await getFile();
            
            if(!(blob.data instanceof Blob)) {
                FailToast(`Failed to get the document ${filename}`)
                return;
            }

            if(download) {
                downloadFile(blob.data, filename, blob.data.type)
            } else {
                const href = URL.createObjectURL(blob.data);
                
                // link.current.download = filename;
                link.current.href = href;
                link.current.target = "_blank";
                link.current.rel = "noopener noreferrer"
                
                link.current.click();
            }
        }
    }

    const fileExt = filename ? filename.split(".")[filename.split(".").length -1] : "";

    useEffect(() => {
        link.current?.removeAttribute("href");
    }, [filename])

    return (
        <div className="align align-items-center">
            {["jpg", "jpeg", "png", "bmp"].includes(fileExt.toLowerCase()) && (iconOnly ?
                    <a role='button' className={className} title={filename} style={style} ref={link} onClick={handleAction}>
                        <BsImage className="imgIcon mr-1"/>
                    </a>
                    :
                    <BsImage className="imgIcon mr-1"/>
                )
            }
            {["pdf", 'xps'].includes(fileExt.toLowerCase()) && (iconOnly ?
                    <a role='button' className={className} title={filename} style={style} ref={link} onClick={handleAction}>
                        <AiOutlineFilePdf className="imgIcon mr-1"/>
                    </a>
                    :
                    <AiOutlineFilePdf className="imgIcon mr-1"/>
                )
            }

            {!iconOnly &&
                <span className="small text-truncate text-info" title={filename}>
                    <a role='button' className={className} style={style} ref={link} onClick={handleAction}>
                        {truncateFileName(filename, 20)}
                    </a>
                </span>
            }
        </div>
    )
}

interface AuthImageFileProps {
    path: string;
    type: string;
    internal?: boolean;
    filename?: string;
    alt?: string;
    className?: string;
    style?: React.CSSProperties;
}

AuthFile.Image = function AuthImageFile({ path, type, internal, alt, className, style = {} }: AuthImageFileProps) {
    const [imgsrc, setimgsrc] = useState("");

    const getFile = async () => {
        const data = await makeApiRequest({controllerName: internal ? internalFilePath.replace("{type}", type).replace("{path}", path) : externalFilePath.replace("{type}", type).replace("{path}", path), actionName: "AUTHFILE"}, null, "GET");
        
        if(data.data instanceof Blob){
            setimgsrc(URL.createObjectURL(data.data));
        }
        else {
            FailToast(data.data?.message);
        }
    }
    useEffect(() => {
        getFile();
    }, [])

    
    useEffect(() => {
        setimgsrc("");
    }, [path])

    return (
        <img className={className} style={{width: 64, height: 64, ...style}} src={imgsrc} alt={alt || "image"} />
    )
}


interface AuthPDFFileProps {
    path: string;
    type: string;
    internal?: boolean;
    title: string;
    filename?: string;
    alt?: string;
    className?: string;
    style?: React.CSSProperties;
}

AuthFile.PDF = function AuthPDFFile({ path, type, internal, className, style, title }: AuthPDFFileProps) {
    const [pdfsrc, setpdfsrc] = useState("");

    const getFile = async () => {
        const data = await makeApiRequest({controllerName: internal ? internalFilePath.replace("{type}", type).replace("{path}", path) : externalFilePath.replace("{type}", type).replace("{path}", path), actionName: "AUTHFILE"}, null, "GET");
        if(data.data instanceof Blob){
            setpdfsrc(URL.createObjectURL(data.data));
        }
        else {
            FailToast(data.data?.message);
        }
    }

    useEffect(() => {
        getFile();
    }, [])
    
    useEffect(() => {
        setpdfsrc("");
    }, [path])

    return (
        <iframe className={className} style={style} title={title} src={pdfsrc} />
    )
}


interface AuthLocalFileProps {
    file: File;
    className?: string;
    style?: React.CSSProperties;
    iconOnly?: boolean;
}
AuthFile.LocalFile = function AuthLocalFile({ file, className, style, iconOnly }: AuthLocalFileProps): ReactElement {

    const link = useRef<HTMLAnchorElement | null>(null);
    const handleAction = async () => {
        if(link.current) {
            const href = URL.createObjectURL(file);
            
            link.current.href = href;
            link.current.target = "_blank";
            link.current.rel = "noopener noreferrer"
            
            link.current.click();
        }
    }

    const fileExt = file.name ? file.name.split(".")[file.name.split(".").length -1] : "";

    useEffect(() => {
        link.current?.removeAttribute("href");
    }, [file])

    return (
        <div className="align align-items-center">
            {["jpg", "jpeg", "png", "bmp"].includes(fileExt.toLowerCase()) && (iconOnly ?
                    <a role='button' className={className} title={file.name} style={style} ref={link} onClick={handleAction}>
                        <BsImage className="imgIcon mr-1"/>
                    </a>
                    :
                    <BsImage className="imgIcon mr-1"/>
                )
            }
            {["pdf", 'xps'].includes(fileExt.toLowerCase()) && (iconOnly ?
                    <a role='button' className={className} title={file.name} style={style} ref={link} onClick={handleAction}>
                        <AiOutlineFilePdf className="imgIcon mr-1"/>
                    </a>
                    :
                    <AiOutlineFilePdf className="imgIcon mr-1"/>
                )
            }

            {!iconOnly &&
                <span className="small text-truncate text-info" title={file.name}>
                    <a role='button' className={className} style={style} ref={link} onClick={handleAction}>
                        {truncateFileName(file.name, 20)}
                    </a>
                </span>
            }
        </div>
    )
}