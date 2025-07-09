import request from "@/utils/request";
import {  PluginConfigRequest } from "./types";

/**
 * 获取所有插件列表
 */
export function getPluginsApi() {
  return request({
    url: "/api/v1/plugins/get",
    method: "get",
  });
}





/**
 * 启用插件
 * 
 * @param name 插件名称
 */
export function enablePluginApi(name: string) {
  return request({
    url: `/api/v1/plugins/enable/${name}`,
    method: "post",
  });
}

/**
 * 禁用插件
 * 
 * @param name 插件名称
 */
export function disablePluginApi(name: string){
  return request({
    url: `/api/v1/plugins/disable/${name}`,
    method: "post",
  });
}

/**
 * 更新插件配置
 * 
 * @param data 插件配置请求参数
 */
export function updatePluginConfigApi(data: PluginConfigRequest){
  return request({
    url: "/api/v1/plugins/config",
    method: "put",
    data,
  });
}

/**
 * 获取插件配置
 * 
 * @param name 插件名称
 */
export function getPluginConfigApi(name: string) {
  return request({
    url: `/api/v1/plugins/config/${name}`,
    method: "get",
  });
}

/**
 * 重新加载插件
 */
export function reloadPluginsApi() {
  return request({
    url: "/api/v1/plugins/reload",
    method: "post",
  });
}
