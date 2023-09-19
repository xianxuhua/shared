import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export const exportPDF = (filename: string) => {
    const ele: HTMLElement | null = document.getElementById('pdf');
    html2canvas(ele as HTMLElement, {
        useCORS: true, // 允许canvas画布内 可以跨域请求外部链接图片, 允许跨域请求。,
    }).then((canvas) => {
        const pageData = canvas.toDataURL('image/jpeg', 1.0);
        console.log(base64DataURLToArrayBuffer(pageData))
        const pdf = new jsPDF();
        // 在pdf.addImage(pageData, 'JPEG', 左，上，宽度，高度)设置在pdf中显示；
        pdf.addImage(pageData, 'JPEG', 0, 0, canvas.width / 8, canvas.height / 8);
        // 可动态生成
        pdf.save(`${filename}.pdf`);
    })
}

import docxtemplater from 'docxtemplater'
import PizZip from 'pizzip'
import PizZipUtils from 'pizzip/utils'
import { saveAs } from 'file-saver'
// @ts-ignore
import ImageModule from "docxtemplater-image-module-free";


//导出word文件(docData为处理好的数据)
export function exportWord(template: string, docData: any, filename: string) {
    // word导出 - 编译
    const loadFile = function loadFile(url: any, callback: any) {
        PizZipUtils.getBinaryContent(url, callback)
    }
    loadFile(template, function (error: any, content: any) {
        if (error) {
            throw error
        }
        // 有图片的话，需加上下面这段代码
        let opts: any = {}
        opts.centered = false
        opts.fileType = 'docx'
        opts.getImage = function (tagValue: any) {
            return new Promise(function (resolve, reject) {
                const ele: HTMLElement | null = document.getElementById('pdf');
                html2canvas(ele as HTMLElement, {
                    useCORS: true, // 允许canvas画布内 可以跨域请求外部链接图片, 允许跨域请求。,
                }).then((canvas) => {
                    const pageData = canvas.toDataURL('image/jpeg', 1.0);
                    const content = base64DataURLToArrayBuffer(pageData)
                    resolve(content)
                })
                // PizZipUtils.getBinaryContent(tagValue, function (error: any, content: any) {
                //     if (error) {
                //         return reject(error)
                //     }
                //     return resolve(content)
                // })
            })
        }
        opts.getSize = function () {
            return [255, 195]//这里是生成的word文件里图片的宽和高
        }
        let img = new ImageModule(opts)
        var zip = new PizZip(content)
        let doc = new docxtemplater().loadZip(zip).attachModule(img).compile()
        // 有图片的话,需加载图片处理模块
        doc.resolveData(docData).then(function () {
            doc.render() //apply them (replace all occurences of {first_name} by Hipp, ...)
            var out = doc.getZip().generate({
                type: 'blob',
                mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            }) //Output the document using Data-URI
            saveAs(out, filename + '.docx')
        })
    })
}

function base64DataURLToArrayBuffer(dataURL: string) {
    const base64Regex = /^data:image\/(png|jpg|jpeg|svg|svg\+xml);base64,/;
    if (!base64Regex.test(dataURL)) {
        return false;
    }
    const stringBase64 = dataURL.replace(base64Regex, "");
    let binaryString;
    if (typeof window !== "undefined") {
        binaryString = window.atob(stringBase64);
    } else {
        binaryString = new Buffer(stringBase64, "base64").toString("binary");
    }
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        const ascii = binaryString.charCodeAt(i);
        bytes[i] = ascii;
    }
    return bytes.buffer;
}
