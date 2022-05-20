import { Typography } from 'antd';
export { Typography, Badge } from "antd";


export const Title = ({ children }) => <Typography.Title style={{ fontWeight: 300, color: '#7B7C7E' }}>{children}</Typography.Title>
export const CardTitle = ({ children, centered = false }) => <Typography.Title style={{ fontWeight: 400, color: '#7B7C7E', fontSize: '25px', ...(centered ? { textAlign: 'center' } : {}) }}>{children}</Typography.Title>
export const Paragraph = ({ children, centered = false, small = false }) => <Typography.Paragraph style={{ color: '#7B7C7E', ...(centered ? { textAlign: 'center' } : {}), ...(small ? { fontSize: '1em', fontWeight: 'bold' } : {}) }}> {children}</Typography.Paragraph >
export const Text = ({ children, centered = false, small = false, color = '#7B7C7E' }) => <span style={{ color, ...(centered ? { textAlign: 'center' } : {}), ...(small ? { fontSize: '1em', fontWeight: 'bold' } : { fontSize: '1.5em' }) }}> {children}</span >
export const Label = ({ children, color = '#7B7C7E', bold = false, bg = false, thin = true }) => <span style={{ color, fontSize: '1.3em', ...(thin ? { fontWeight: 300 } : {}), ...(bold ? { fontWeight: 'bold' } : {}), ...(bg ? { fontSize: '1.9em' } : {}) }}> {children}</span>