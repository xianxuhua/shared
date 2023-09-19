SELECT
	COLUMN_NAME 字段名称,
	COLUMN_TYPE 类型,
	( CASE WHEN IS_NULLABLE = 'NO' THEN '否' ELSE '是' END ) 是否为空,
	COLUMN_COMMENT 描述 
FROM
	information_schema.`COLUMNS` 
WHERE
	TABLE_SCHEMA = 'jobSearch'              
	AND table_name = 'position_position' 

